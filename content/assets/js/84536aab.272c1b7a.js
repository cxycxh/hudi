"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[40356],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(a),c=r,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},37559:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={title:"Querying Data",keywords:["hudi","hive","spark","sql","presto"],summary:"In this page, we go over how to process data in Hudi tables.",toc:!0,last_modified_at:new Date("2019-12-30T19:59:57.000Z")},l=void 0,o={unversionedId:"querying_data",id:"version-0.14.0/querying_data",title:"Querying Data",description:"This page is no longer maintained. Please refer to Hudi SQL DDL, SQL DML, SQL Queries and Procedures for the latest documentation.",source:"@site/versioned_docs/version-0.14.0/querying_data.md",sourceDirName:".",slug:"/querying_data",permalink:"/docs/querying_data",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.14.0/querying_data.md",tags:[],version:"0.14.0",frontMatter:{title:"Querying Data",keywords:["hudi","hive","spark","sql","presto"],summary:"In this page, we go over how to process data in Hudi tables.",toc:!0,last_modified_at:"2019-12-30T19:59:57.000Z"}},s=[{value:"Spark Datasource",id:"spark-datasource",children:[{value:"Snapshot query",id:"spark-snap-query",children:[],level:3},{value:"Incremental query",id:"spark-incr-query",children:[],level:3},{value:"Incremental query",id:"incremental-query",children:[],level:3}],level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This page is no longer maintained. Please refer to Hudi ",(0,r.kt)("a",{parentName:"p",href:"/docs/sql_ddl"},"SQL DDL"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/sql_dml"},"SQL DML"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/sql_queries"},"SQL Queries")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/procedures"},"Procedures")," for the latest documentation."))),(0,r.kt)("p",null,"Conceptually, Hudi stores data physically once on DFS, while providing 3 different ways of querying, as explained ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts#query-types"},"before"),".\nOnce the table is synced to the Hive metastore, it provides external Hive tables backed by Hudi's custom inputformats. Once the proper hudi\nbundle has been installed, the table can be queried by popular query engines like Hive, Spark SQL, Flink, Trino and PrestoDB."),(0,r.kt)("p",null,"In sections, below we will discuss specific setup to access different query types from different query engines. "),(0,r.kt)("h2",{id:"spark-datasource"},"Spark Datasource"),(0,r.kt)("p",null,"The Spark Datasource API is a popular way of authoring Spark ETL pipelines. Hudi tables can be queried via the Spark datasource with a simple ",(0,r.kt)("inlineCode",{parentName:"p"},"spark.read.parquet"),".\nSee the ",(0,r.kt)("a",{parentName:"p",href:"/docs/quick-start-guide"},"Spark Quick Start")," for more examples of Spark datasource reading queries. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Setup")),(0,r.kt)("p",null,"If your Spark environment does not have the Hudi jars installed, add ",(0,r.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/org.apache.hudi/hudi-spark-bundle"},"hudi-spark-bundle")," jar to the\nclasspath of drivers and executors using ",(0,r.kt)("inlineCode",{parentName:"p"},"--jars")," option. Alternatively, hudi-spark-bundle can also fetched via the\n--packages options (e.g: --packages org.apache.hudi:hudi-spark-bundle_2.11:0.13.0)."),(0,r.kt)("h3",{id:"spark-snap-query"},"Snapshot query"),(0,r.kt)("p",null,"Retrieve the data table at the present point in time."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val hudiSnapshotQueryDF = spark\n     .read\n     .format("hudi")\n     .option(DataSourceReadOptions.QUERY_TYPE_OPT_KEY(), DataSourceReadOptions.QUERY_TYPE_SNAPSHOT_OPT_VAL())\n     .load(tablePath) \n')),(0,r.kt)("h3",{id:"spark-incr-query"},"Incremental query"),(0,r.kt)("p",null,"Of special interest to spark pipelines, is Hudi's ability to support incremental queries, like below. A sample incremental query, that will obtain all records written since ",(0,r.kt)("inlineCode",{parentName:"p"},"beginInstantTime"),", looks like below.\nThanks to Hudi's support for record level change streams, these incremental pipelines often offer 10x efficiency over batch counterparts by only processing the changed records."),(0,r.kt)("p",null,"The following snippet shows how to obtain all records changed after ",(0,r.kt)("inlineCode",{parentName:"p"},"beginInstantTime")," and run some SQL on them."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Dataset<Row> hudiIncQueryDF = spark.read()\n     .format("org.apache.hudi")\n     .option(DataSourceReadOptions.QUERY_TYPE_OPT_KEY(), DataSourceReadOptions.QUERY_TYPE_INCREMENTAL_OPT_VAL())\n     .option(DataSourceReadOptions.BEGIN_INSTANTTIME_OPT_KEY(), <beginInstantTime>)\n     .option(DataSourceReadOptions.INCR_PATH_GLOB_OPT_KEY(), "/year=2020/month=*/day=*") // Optional, use glob pattern if querying certain partitions\n     .load(tablePath); // For incremental query, pass in the root/base path of table\n     \nhudiIncQueryDF.createOrReplaceTempView("hudi_trips_incremental")\nspark.sql("select `_hoodie_commit_time`, fare, begin_lon, begin_lat, ts from  hudi_trips_incremental where fare > 20.0").show()\n')),(0,r.kt)("p",null,"For examples, refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/quick-start-guide#incremental-query"},"Incremental Queries")," in the Spark quickstart.\nPlease refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/configurations#SPARK_DATASOURCE"},"configurations")," section, to view all datasource options."),(0,r.kt)("p",null,"Additionally, ",(0,r.kt)("inlineCode",{parentName:"p"},"HoodieReadClient")," offers the following functionality using Hudi's implicit indexing."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"API")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"read(keys)"),(0,r.kt)("td",{parentName:"tr",align:null},"Read out the data corresponding to the keys as a DataFrame, using Hudi's own index for faster lookup")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filterExists()"),(0,r.kt)("td",{parentName:"tr",align:null},"Filter out already existing records from the provided ",(0,r.kt)("inlineCode",{parentName:"td"},"RDD[HoodieRecord]"),". Useful for de-duplication")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"checkExists(keys)"),(0,r.kt)("td",{parentName:"tr",align:null},"Check if the provided keys exist in a Hudi table")))),(0,r.kt)("h3",{id:"incremental-query"},"Incremental query"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"HiveIncrementalPuller")," allows incrementally extracting changes from large fact/dimension tables via HiveQL, combining the benefits of Hive (reliably process complex SQL queries) and\nincremental primitives (speed up querying tables incrementally instead of scanning fully). The tool uses Hive JDBC to run the hive query and saves its results in a temp table.\nthat can later be upserted. Upsert utility (",(0,r.kt)("inlineCode",{parentName:"p"},"HoodieStreamer"),") has all the state it needs from the directory structure to know what should be the commit time on the target table.\ne.g: ",(0,r.kt)("inlineCode",{parentName:"p"},"/app/incremental-hql/intermediate/{source_table_name}_temp/{last_commit_included}"),".The Delta Hive table registered will be of the form ",(0,r.kt)("inlineCode",{parentName:"p"},"{tmpdb}.{source_table}_{last_commit_included}"),"."),(0,r.kt)("p",null,"The following are the configuration options for HiveIncrementalPuller"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Config")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Default")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hiveUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"Hive Server 2 URL to connect to"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hiveUser"),(0,r.kt)("td",{parentName:"tr",align:null},"Hive Server 2 Username"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hivePass"),(0,r.kt)("td",{parentName:"tr",align:null},"Hive Server 2 Password"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"queue"),(0,r.kt)("td",{parentName:"tr",align:null},"YARN Queue name"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tmp"),(0,r.kt)("td",{parentName:"tr",align:null},"Directory where the temporary delta data is stored in DFS. The directory structure will follow conventions. Please see the below section."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"extractSQLFile"),(0,r.kt)("td",{parentName:"tr",align:null},"The SQL to execute on the source table to extract the data. The data extracted will be all the rows that changed since a particular point in time."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sourceTable"),(0,r.kt)("td",{parentName:"tr",align:null},"Source Table Name. Needed to set hive environment properties."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sourceDb"),(0,r.kt)("td",{parentName:"tr",align:null},"Source DB name. Needed to set hive environment properties."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"targetTable"),(0,r.kt)("td",{parentName:"tr",align:null},"Target Table Name. Needed for the intermediate storage directory structure."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"targetDb"),(0,r.kt)("td",{parentName:"tr",align:null},"Target table's DB name."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tmpdb"),(0,r.kt)("td",{parentName:"tr",align:null},"The database to which the intermediate temp delta table will be created"),(0,r.kt)("td",{parentName:"tr",align:null},"hoodie_temp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fromCommitTime"),(0,r.kt)("td",{parentName:"tr",align:null},"This is the most important parameter. This is the point in time from which the changed records are queried from."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxCommits"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of commits to include in the query. Setting this to -1 will include all the commits from fromCommitTime. Setting this to a value > 0, will include records that ONLY changed in the specified number of commits after fromCommitTime. This may be needed if you need to catch up say 2 commits at a time."),(0,r.kt)("td",{parentName:"tr",align:null},"3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"help"),(0,r.kt)("td",{parentName:"tr",align:null},"Utility Help"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"Setting fromCommitTime=0 and maxCommits=-1 will fetch the entire source table and can be used to initiate backfills. If the target table is a Hudi table,\nthen the utility can determine if the target table has no commits or is behind more than 24 hour (this is configurable),\nit will automatically use the backfill configuration, since applying the last 24 hours incrementally could take more time than doing a backfill. The current limitation of the tool\nis the lack of support for self-joining the same table in mixed mode (snapshot and incremental modes)."))}u.isMDXComponent=!0}}]);