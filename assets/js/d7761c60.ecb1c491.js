"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[5755],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),p=u(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(f,i(i({ref:e},c),{},{components:n})):a.createElement(f,i({ref:e},c))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1829:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],l={},s="Core Concepts",u={unversionedId:"cloud/core-concepts",id:"cloud/core-concepts",title:"Core Concepts",description:"Airbyte enables you to build data pipelines and replicate data from a source to a destination. You can configure how frequently the data is synced, what data is replicated, what format the data is written to in the destination, and if the data is stored in raw tables format or basic normalized (or JSON) format.",source:"@site/../docs/cloud/core-concepts.md",sourceDirName:"cloud",slug:"/cloud/core-concepts",permalink:"/airbyte/cloud/core-concepts",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/cloud/core-concepts.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Getting Started with Airbyte Cloud",permalink:"/airbyte/cloud/getting-started-with-airbyte-cloud"},next:{title:"Managing Airbyte Cloud",permalink:"/airbyte/cloud/managing-airbyte-cloud"}},c={},d=[{value:"Source",id:"source",level:2},{value:"Destination",id:"destination",level:2},{value:"Connector",id:"connector",level:2},{value:"Connection",id:"connection",level:2},{value:"Stream",id:"stream",level:2},{value:"Field",id:"field",level:2},{value:"Namespace",id:"namespace",level:2},{value:"Connection sync modes",id:"connection-sync-modes",level:2},{value:"Normalization",id:"normalization",level:2},{value:"Workspace",id:"workspace",level:2},{value:"Credits",id:"credits",level:2}],p={toc:d};function m(t){var e=t.components,n=(0,o.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"core-concepts"},"Core Concepts"),(0,r.kt)("p",null,"Airbyte enables you to build data pipelines and replicate data from a source to a destination. You can configure how frequently the data is synced, what data is replicated, what format the data is written to in the destination, and if the data is stored in raw tables format or basic normalized (or JSON) format. "),(0,r.kt)("p",null,"This page describes the concepts you need to know to use Airbyte."),(0,r.kt)("h2",{id:"source"},"Source"),(0,r.kt)("p",null,"A source is an API, file, database, or data warehouse that you want to ingest data from. "),(0,r.kt)("h2",{id:"destination"},"Destination"),(0,r.kt)("p",null,"A destination is a data warehouse, data lake, database, or an analytics tool where you want to load your ingested data."),(0,r.kt)("h2",{id:"connector"},"Connector"),(0,r.kt)("p",null,"An Airbyte component which pulls data from, or pushes data to, a source or destination."),(0,r.kt)("h2",{id:"connection"},"Connection"),(0,r.kt)("p",null,"A connection is an automated data pipeline that replicates data from a source to a destination. "),(0,r.kt)("p",null,"Setting up a connection involves configuring the following parameters:"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("strong",null,"Parameter")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"Description"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Sync schedule"),(0,r.kt)("td",null,"When should a data sync be triggered?")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Destination Namespace and stream names"),(0,r.kt)("td",null,"Where should the replicated data be written?")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Catalog selection"),(0,r.kt)("td",null,"What data should be replicated from the source to the destination?")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Sync mode"),(0,r.kt)("td",null,"How should the streams be replicated (read and written)?")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Optional transformations"),(0,r.kt)("td",null,"How should Airbyte protocol messages (raw JSON blob) data be converted into other data representations?"))),(0,r.kt)("h2",{id:"stream"},"Stream"),(0,r.kt)("p",null,"A stream is a group of related records. "),(0,r.kt)("p",null,"Examples of streams:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A table in a relational database "),(0,r.kt)("li",{parentName:"ul"},"A resource or API endpoint for a REST API "),(0,r.kt)("li",{parentName:"ul"},"The records from a directory containing many files in a filesystem")),(0,r.kt)("h2",{id:"field"},"Field"),(0,r.kt)("p",null,"A field is an attribute of a record in a stream. "),(0,r.kt)("p",null,"Examples of fields: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A column in the table in a relational database "),(0,r.kt)("li",{parentName:"ul"},"A field in an API response")),(0,r.kt)("h2",{id:"namespace"},"Namespace"),(0,r.kt)("p",null,"Namespace is a group of streams in a source or destination. Common use cases for namespaces are enforcing permissions, segregating test and production data, and general data organization."),(0,r.kt)("p",null,"A schema in a relational database system is an example of a namespace. "),(0,r.kt)("p",null,"In a source, the namespace is the location from where the data is replicated to the destination."),(0,r.kt)("p",null,"In a destination, the namespace is the location where the replicated data is stored in the destination. Airbyte supports the following configuration options for destination namespaces:"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("strong",null,"Configuration")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"Description"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Mirror source structure"),(0,r.kt)("td",null,'Some sources (for example, databases) provide namespace information for a stream. If a source provides the namespace information, the destination will reproduce the same namespace when this configuration is set. For sources or streams where the source namespace is not known, the behavior will default to the "Destination default" option.')),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Destination default"),(0,r.kt)("td",null,"All streams will be replicated and stored in the default namespace defined on the destination settings page. For settings for popular destinations, see",(0,r.kt)("a",{href:"https://docs.airbyte.com/understanding-airbyte/namespaces#destination-connector-settings"}," \u200b\u200bDestination Connector Settings"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Custom format"),(0,r.kt)("td",null,"All streams will be replicated and stored in a user-defined custom format. See",(0,r.kt)("a",{href:"https://docs.airbyte.com/understanding-airbyte/namespaces#custom-format"}," Custom format")," for more details."))),(0,r.kt)("h2",{id:"connection-sync-modes"},"Connection sync modes"),(0,r.kt)("p",null,"A sync mode governs how Airbyte reads from a source and writes to a destination. Airbyte provides different sync modes to account for various use cases."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full Refresh | Overwrite:")," Sync all records from the source and replace data in destination by overwriting it."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full Refresh | Append:")," Sync all records from the source and add them to the destination without deleting any data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Incremental Sync | Append:")," Sync new records from the source and add them to the destination without deleting any data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Incremental Sync | Deduped History:")," Sync new records from the source and add them to the destination. Also provides a de-duplicated view mirroring the state of the stream in the source.")),(0,r.kt)("h2",{id:"normalization"},"Normalization"),(0,r.kt)("p",null,"Normalization is the process of structuring data from the source into a format appropriate for consumption in the destination. For example, when writing data from a nested, dynamically typed source like a JSON API to a relational destination like Postgres, normalization is the process which un-nests JSON from the source into a relational table format which uses the appropriate column types in the destination."),(0,r.kt)("p",null,"Note that normalization is only relevant for the following relational database & warehouse destinations: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"BigQuery"),(0,r.kt)("li",{parentName:"ul"},"Snowflake"),(0,r.kt)("li",{parentName:"ul"},"Redshift"),(0,r.kt)("li",{parentName:"ul"},"Postgres"),(0,r.kt)("li",{parentName:"ul"},"Oracle"),(0,r.kt)("li",{parentName:"ul"},"MySQL"),(0,r.kt)("li",{parentName:"ul"},"MSSQL")),(0,r.kt)("p",null,"Other destinations do not support normalization as described in this section, though they may normalize data in a format that makes sense for them. For example, the S3 destination connector offers the option of writing JSON files in S3, but also offers the option of writing statically typed files such as Parquet or Avro. "),(0,r.kt)("p",null,"After a sync is complete, Airbyte normalizes the data. When setting up a connection, you can choose one of the following normalization options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Raw data (no normalization): Airbyte places the JSON blob version of your data in a table called ",(0,r.kt)("inlineCode",{parentName:"li"},"_airbyte_raw_<stream name>")),(0,r.kt)("li",{parentName:"ul"},"Basic Normalization: Airbyte converts the raw JSON blob version of your data to the format of your destination. ",(0,r.kt)("em",{parentName:"li"},"Note: Not all destinations support normalization."))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: Custom normalization through dbt is not yet available for Airbyte Cloud.")),(0,r.kt)("h2",{id:"workspace"},"Workspace"),(0,r.kt)("p",null,"A workspace is a grouping of sources, destinations, connections, and other configurations. It lets you collaborate with team members and share resources across your team under a shared billing account. "),(0,r.kt)("p",null,"When you ",(0,r.kt)("a",{parentName:"p",href:"http://cloud.airbyte.io/signup"},"sign up")," for Airbyte Cloud, we automatically create your first workspace where you are the only user with access. You can set up your sources and destinations to start syncing data and invite other users to join your workspace."),(0,r.kt)("h2",{id:"credits"},"Credits"),(0,r.kt)("p",null,"An Airbyte credit is a unit of measure used to pay for Airbyte resources when you run a sync. "),(0,r.kt)("p",null,"What one credit stands for depends on the source type:"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("strong",null,"Source type")),(0,r.kt)("td",null,(0,r.kt)("strong",null,"What does one credit stand for?"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"API sources"),(0,r.kt)("td",null,"1 hour of compute (360k rows on average)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Databases"),(0,r.kt)("td",null,"1/10 hour of compute (450k rows on average)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Files"),(0,r.kt)("td",null,"1/4 hour of compute (65k rows on average)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Custom connectors"),(0,r.kt)("td",null,"1 hour of compute (360k rows on average)"))),(0,r.kt)("p",null,"Compute time is the time between replicating the first and last bytes."),(0,r.kt)("p",null,"Credits are charged for successful syncs, normalization, and canceled jobs and attempts. Credits are not charged for failed jobs and attempts."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: Credits expire after one year.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Warning:")," Since our pricing model is linear, your costs will start rising as your data needs grow. Contact us for customized pricing if you want to replicate more than 1TB of data in your databases or 50 million records across your API sources on a monthly basis."))}m.isMDXComponent=!0}}]);