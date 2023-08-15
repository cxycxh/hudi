"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[3373],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(a),m=i,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return a?n.createElement(f,r(r({ref:t},p),{},{components:a})):n.createElement(f,r({ref:t},p))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},93690:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(87462),i=(a(67294),a(3905));const o={title:"Performance",keywords:["hudi","index","storage","compaction","cleaning","implementation"],toc:!1,last_modified_at:new Date("2019-12-30T19:59:57.000Z")},r=void 0,s={unversionedId:"performance",id:"version-0.12.1/performance",title:"Performance",description:"Optimized DFS Access",source:"@site/versioned_docs/version-0.12.1/performance.md",sourceDirName:".",slug:"/performance",permalink:"/cn/docs/0.12.1/performance",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.12.1/performance.md",tags:[],version:"0.12.1",frontMatter:{title:"Performance",keywords:["hudi","index","storage","compaction","cleaning","implementation"],toc:!1,last_modified_at:"2019-12-30T19:59:57.000Z"},sidebar:"docs",previous:{title:"Query Engine Setup",permalink:"/cn/docs/0.12.1/query_engine_setup"},next:{title:"Deployment",permalink:"/cn/docs/0.12.1/deployment"}},l=[{value:"Optimized DFS Access",id:"optimized-dfs-access",children:[],level:2},{value:"Performance Optimizations",id:"performance-optimizations",children:[{value:"Write Path",id:"write-path",children:[{value:"Bulk Insert",id:"bulk-insert",children:[],level:4},{value:"Upserts",id:"upserts",children:[],level:4},{value:"Indexing",id:"indexing",children:[],level:4}],level:3},{value:"Read Path",id:"read-path",children:[{value:"Data Skipping",id:"data-skipping",children:[],level:4}],level:3}],level:2}],d={toc:l},p="wrapper";function c(e){let{components:t,...o}=e;return(0,i.kt)(p,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"optimized-dfs-access"},"Optimized DFS Access"),(0,i.kt)("p",null,"Hudi also performs several key storage management functions on the data stored in a Hudi table. A key aspect of storing data on DFS is managing file sizes and counts\nand reclaiming storage space. For e.g HDFS is infamous for its handling of small files, which exerts memory/RPC pressure on the Name Node and can potentially destabilize\nthe entire cluster. In general, query engines provide much better performance on adequately sized columnar files, since they can effectively amortize cost of obtaining\ncolumn statistics etc. Even on some cloud data stores, there is often cost to listing directories with large number of small files."),(0,i.kt)("p",null,"Here are some ways to efficiently manage the storage of your Hudi tables."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"/docs/configurations/#hoodieparquetsmallfilelimit"},"small file handling feature")," in Hudi, profiles incoming workload\nand distributes inserts to existing file groups instead of creating new file groups, which can lead to small files."),(0,i.kt)("li",{parentName:"ul"},"Cleaner can be ",(0,i.kt)("a",{parentName:"li",href:"/docs/configurations#hoodiecleanercommitsretained"},"configured")," to clean up older file slices, more or less aggressively depending on maximum time for queries to run & lookback needed for incremental pull"),(0,i.kt)("li",{parentName:"ul"},"User can also tune the size of the ",(0,i.kt)("a",{parentName:"li",href:"/docs/configurations#hoodieparquetmaxfilesize"},"base/parquet file"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/configurations#hoodielogfilemaxsize"},"log files")," & expected ",(0,i.kt)("a",{parentName:"li",href:"/docs/configurations#hoodieparquetcompressionratio"},"compression ratio"),",\nsuch that sufficient number of inserts are grouped into the same file group, resulting in well sized base files ultimately."),(0,i.kt)("li",{parentName:"ul"},"Intelligently tuning the ",(0,i.kt)("a",{parentName:"li",href:"/docs/configurations#hoodiebulkinsertshuffleparallelism"},"bulk insert parallelism"),", can again in nicely sized initial file groups. It is in fact critical to get this right, since the file groups\nonce created cannot be changed without re-clustering the table. Writes will simply expand given file groups with new updates/inserts as explained before."),(0,i.kt)("li",{parentName:"ul"},"For workloads with heavy updates, the ",(0,i.kt)("a",{parentName:"li",href:"/docs/concepts#merge-on-read-table"},"merge-on-read table")," provides a nice mechanism for ingesting quickly into smaller files and then later merging them into larger base files via compaction.")),(0,i.kt)("h2",{id:"performance-optimizations"},"Performance Optimizations"),(0,i.kt)("p",null,"In this section, we go over some real world performance numbers for Hudi upserts, incremental pull and compare them against\nthe conventional alternatives for achieving these tasks."),(0,i.kt)("h3",{id:"write-path"},"Write Path"),(0,i.kt)("h4",{id:"bulk-insert"},"Bulk Insert"),(0,i.kt)("p",null,"Write configurations in Hudi are optimized for incremental upserts by default. In fact, the default write operation type is UPSERT as well.\nFor simple append-only use case to bulk load the data, following set of configurations are recommended for optimal writing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"-- Use \u201cbulk-insert\u201d write-operation instead of default \u201cupsert\u201d\nhoodie.datasource.write.operation = BULK_INSERT\n-- Disable populating meta columns and metadata, and enable virtual keys\nhoodie.populate.meta.fields = false\nhoodie.metadata.enable = false\n-- Enable snappy compression codec for lesser CPU cycles (but more storage overhead)\nhoodie.parquet.compression.codec = snappy\n")),(0,i.kt)("p",null,"For ingesting via spark-sql"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"-- Use \u201cbulk-insert\u201d write-operation instead of default \u201cupsert\u201d\nhoodie.sql.insert.mode = non-strict,\nhoodie.sql.bulk.insert.enable = true,\n-- Disable populating meta columns and metadata, and enable virtual keys\nhoodie.populate.meta.fields = false\nhoodie.metadata.enable = false\n-- Enable snappy compression codec for lesser CPU cycles (but more storage overhead)\nhoodie.parquet.compression.codec = snappy\n")),(0,i.kt)("p",null,"We recently benchmarked Hudi against TPC-DS workload.\nPlease check out ",(0,i.kt)("a",{parentName:"p",href:"/blog/2022/06/29/Apache-Hudi-vs-Delta-Lake-transparent-tpc-ds-lakehouse-performance-benchmarks"},"our blog")," for more details."),(0,i.kt)("h4",{id:"upserts"},"Upserts"),(0,i.kt)("p",null,"Following shows the speed up obtained for NoSQL database ingestion, from incrementally upserting on a Hudi table on the copy-on-write storage,\non 5 tables ranging from small to huge (as opposed to bulk loading the tables)"),(0,i.kt)("figure",null,(0,i.kt)("img",{className:"docimage",src:a(28323).Z,alt:"hudi_upsert_perf1.png"})),(0,i.kt)("p",null,"Given Hudi can build the table incrementally, it opens doors for also scheduling ingesting more frequently thus reducing latency, with\nsignificant savings on the overall compute cost."),(0,i.kt)("figure",null,(0,i.kt)("img",{className:"docimage",src:a(1620).Z,alt:"hudi_upsert_perf2.png"})),(0,i.kt)("p",null,"Hudi upserts have been stress tested upto 4TB in a single commit across the t1 table.\nSee ",(0,i.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/HUDI/Tuning+Guide"},"here")," for some tuning tips."),(0,i.kt)("h4",{id:"indexing"},"Indexing"),(0,i.kt)("p",null,"In order to efficiently upsert data, Hudi needs to classify records in a write batch into inserts & updates (tagged with the file group\nit belongs to). In order to speed this operation, Hudi employs a pluggable index mechanism that stores a mapping between recordKey and\nthe file group id it belongs to. By default, Hudi uses a built in index that uses file ranges and bloom filters to accomplish this, with\nupto 10x speed up over a spark join to do the same."),(0,i.kt)("p",null,"Hudi provides best indexing performance when you model the recordKey to be monotonically increasing (e.g timestamp prefix), leading to range pruning filtering\nout a lot of files for comparison. Even for UUID based keys, there are ",(0,i.kt)("a",{parentName:"p",href:"https://www.percona.com/blog/2014/12/19/store-uuid-optimized-way/"},"known techniques")," to achieve this.\nFor e.g , with 100M timestamp prefixed keys (5% updates, 95% inserts) on a event table with 80B keys/3 partitions/11416 files/10TB data, Hudi index achieves a\n",(0,i.kt)("strong",{parentName:"p"},"~7X (2880 secs vs 440 secs) speed up")," over vanilla spark join. Even for a challenging workload like an '100% update' database ingestion workload spanning\n3.25B UUID keys/30 partitions/6180 files using 300 cores, Hudi indexing offers a ",(0,i.kt)("strong",{parentName:"p"},"80-100% speedup"),"."),(0,i.kt)("h3",{id:"read-path"},"Read Path"),(0,i.kt)("h4",{id:"data-skipping"},"Data Skipping"),(0,i.kt)("p",null,"Data Skipping is a technique (originally introduced in Hudi 0.10) that leverages metadata to very effectively prune the search space of a query,\nby eliminating files that cannot possibly contain data matching the query's filters. By maintaining this metadata in the internal Hudi metadata table,\nHudi avoids reading file footers to obtain this information, which can be costly for queries spanning tens of thousands of files."),(0,i.kt)("p",null,"Data Skipping leverages metadata table's ",(0,i.kt)("inlineCode",{parentName:"p"},"col_stats")," partition bearing column-level statistics (such as min-value, max-value, count of null-values in the column, etc)\nfor every file of the Hudi table. This then allows Hudi for every incoming query instead of enumerating every file in the table and reading its corresponding metadata\n(for ex, Parquet footers) for analysis whether it could contain any data matching the query filters, to simply do a query against a Column Stats Index\nin the Metadata Table (which in turn is a Hudi table itself) and within seconds (even for TBs scale tables, with 10s of thousands of files) obtain the list\nof ",(0,i.kt)("em",{parentName:"p"},"all the files that might potentially contain the data")," matching query's filters with crucial property that files that could be ruled out as not containing such data\n(based on their column-level statistics) will be stripped out. See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/master/rfc/rfc-27/rfc-27.md"},"RFC-27")," for detailed design."),(0,i.kt)("p",null,"Partitioning can be considered a coarse form of indexing and data skipping using the col_stats partition can be thought of as a range index, that databases use to identify potential\nblocks of data interesting to a query. Unlike partition pruning for tables using physical partitioning where records in the dataset are organized into a folder structure based\non some column's value, data skipping using col_stats delivers a logical/virtual partitioning."),(0,i.kt)("p",null,"For very large tables (1Tb+, 10s of 1000s of files), Data skipping could"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Substantially improve query execution runtime ",(0,i.kt)("strong",{parentName:"li"},"10x")," as compared to the same query on the same dataset but w/o Data Skipping enabled."),(0,i.kt)("li",{parentName:"ol"},"Help avoid hitting Cloud Storages throttling limits (for issuing too many requests, for ex, AWS limits # of requests / sec that could be issued based on the object's prefix which considerably complicates things for partitioned tables)")),(0,i.kt)("p",null,"To unlock the power of Data Skipping you will need to"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Enable Metadata Table along with Column Stats Index on the ",(0,i.kt)("em",{parentName:"li"},"write path")," (See ",(0,i.kt)("a",{parentName:"li",href:"/docs/metadata_indexing"},"Metadata Indexing"),"), using ",(0,i.kt)("inlineCode",{parentName:"li"},"hoodie.metadata.enable=true")," (to enable Metadata Table on the write path, enabled by default)"),(0,i.kt)("li",{parentName:"ol"},"Enable Data Skipping in your queries, using ",(0,i.kt)("inlineCode",{parentName:"li"},"hoodie.metadata.index.column.stats.enable=true")," (to enable Column Stats Index being populated on the write path, disabled by default)")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you're planning on enabling Column Stats Index for already existing table, please check out the ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata_indexing"},"Metadata Indexing")," guide on how to build Metadata Table Indices (such as Column Stats Index) for existing tables."))),(0,i.kt)("p",null,"To enable Data Skipping in your queries make sure to set following properties to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," (on the read path): "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hoodie.enable.data.skipping")," (to enable Data Skipping)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hoodie.metadata.enable")," (to enable Metadata Table use on the read path)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hoodie.metadata.index.column.stats.enable")," (to enable Column Stats Index use on the read path)")))}c.isMDXComponent=!0},28323:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/hudi_upsert_perf1-8f41921dacb5fb026f1e5457f8c47aa6.png"},1620:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/hudi_upsert_perf2-d4bfcab4e9e8d942a02b712797ee2755.png"}}]);