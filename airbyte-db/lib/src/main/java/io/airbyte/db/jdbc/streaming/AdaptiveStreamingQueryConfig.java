package io.airbyte.db.jdbc.streaming;

import io.airbyte.commons.json.Jsons;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Optional;

public class AdaptiveStreamingQueryConfig implements JdbcStreamingQueryConfig {

  private final FetchSizeEstimator fetchSizeEstimator;

  public AdaptiveStreamingQueryConfig() {
    this.fetchSizeEstimator = TwoStageSizeEstimator.getInstance();
  }

  @Override
  public void initialize(final Connection connection, final Statement preparedStatement) throws SQLException {
    connection.setAutoCommit(false);
    preparedStatement.setFetchSize(FetchSizeConstants.INITIAL_SAMPLE_SIZE);
  }

  @Override
  public void accept(final ResultSet resultSet, final Object rowData) throws SQLException {
    fetchSizeEstimator.accept(rowData);
    final Optional<Integer> newFetchSize = fetchSizeEstimator.getFetchSize();
    if (newFetchSize.isPresent()) {
      resultSet.setFetchSize(newFetchSize.get());
    }
  }

}
