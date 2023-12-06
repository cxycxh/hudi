"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[4389],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),h=i,g=u["".concat(s,".").concat(h)]||u[h]||c[h]||o;return n?a.createElement(g,r(r({ref:t},p),{},{components:n})):a.createElement(g,r({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},91822:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const o={title:"Indexing",toc:!0,toc_min_heading_level:2,toc_max_heading_level:4},r=void 0,l={unversionedId:"indexing",id:"indexing",title:"Indexing",description:"Indexing",source:"@site/docs/indexing.md",sourceDirName:".",slug:"/indexing",permalink:"/docs/next/indexing",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/docs/indexing.md",tags:[],version:"current",frontMatter:{title:"Indexing",toc:!0,toc_min_heading_level:2,toc_max_heading_level:4},sidebar:"docs",previous:{title:"Table & Query Types",permalink:"/docs/next/table_types"},next:{title:"File Layouts",permalink:"/docs/next/file_layouts"}},s=[{value:"Indexing",id:"indexing",children:[],level:2},{value:"Index Types in Hudi",id:"index-types-in-hudi",children:[{value:"Global and Non-Global Indexes",id:"global-and-non-global-indexes",children:[],level:3},{value:"Configs",id:"configs",children:[{value:"Spark based configs",id:"spark-based-configs",children:[],level:4},{value:"Flink based configs",id:"flink-based-configs",children:[],level:4}],level:3}],level:2},{value:"Indexing Strategies",id:"indexing-strategies",children:[{value:"Workload 1: Late arriving updates to fact tables",id:"workload-1-late-arriving-updates-to-fact-tables",children:[],level:3},{value:"Workload 2: De-Duplication in event tables",id:"workload-2-de-duplication-in-event-tables",children:[],level:3},{value:"Workload 3: Random updates/deletes to a dimension table",id:"workload-3-random-updatesdeletes-to-a-dimension-table",children:[],level:3}],level:2},{value:"Related Resources",id:"related-resources",children:[],level:2}],d={toc:s},p="wrapper";function u(e){let{components:t,...o}=e;return(0,i.kt)(p,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"indexing"},"Indexing"),(0,i.kt)("p",null,"Hudi provides efficient upserts, by mapping a given hoodie key (record key + partition path) consistently to a file id, via an indexing mechanism.\nThis mapping between record key and file group/file id, never changes once the first version of a record has been written to a file. In short, the\nmapped file group contains all versions of a group of records."),(0,i.kt)("p",null,"For ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/table_types#copy-on-write-table"},"Copy-On-Write tables"),", this enables fast upsert/delete operations, by\navoiding the need to join against the entire dataset to determine which files to rewrite.\nFor ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/table_types#merge-on-read-table"},"Merge-On-Read tables"),", this design allows Hudi to bound the amount of\nrecords any given base file needs to be merged against.\nSpecifically, a given base file needs to merged only against updates for records that are part of that base file. In contrast,\ndesigns without an indexing component (e.g: ",(0,i.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/Hive/Hive+Transactions"},"Apache Hive ACID"),"),\ncould end up having to merge all the base files against all incoming updates/delete records:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Fact table",src:n(21554).Z}),"\n",(0,i.kt)("em",{parentName:"p"},"Figure: Comparison of merge cost for updates (yellow blocks) against base files (white blocks)")),(0,i.kt)("h2",{id:"index-types-in-hudi"},"Index Types in Hudi"),(0,i.kt)("p",null,"Currently, Hudi supports the following index types. Default is SIMPLE on Spark engine, and INMEMORY on Flink and Java\nengines."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"BLOOM:")," Employs bloom filters built out of the record keys, optionally also pruning candidate files using\nrecord key ranges.Key uniqueness is enforced inside partitions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"GLOBAL_BLOOM:")," Employs bloom filters built out of the record keys, optionally also pruning candidate files using\nrecord key ranges. Key uniqueness is enforced across all partitions in the table."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"SIMPLE (default for Spark engines):")," Default index type for spark engine. Performs a lean join of the incoming records against keys extracted from the table on\nstorage. Key uniqueness is enforced inside partitions. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"GLOBAL_SIMPLE:")," Performs a lean join of the incoming records against keys extracted from the table on\nstorage. Key uniqueness is enforced across all partitions in the table."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"HBASE:")," Manages the index mapping in an external Apache HBase table."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"INMEMORY (default for Flink and Java):")," Uses in-memory hashmap in Spark and Java engine and Flink in-memory state in Flink for indexing."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"BUCKET:")," Employs bucket hashing to locates the file group containing the records. Particularly beneficial in\nlarge scale. Use ",(0,i.kt)("inlineCode",{parentName:"li"},"hoodie.index.bucket.engine")," to choose bucket engine type, i.e., how buckets are generated;",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SIMPLE(default)"),": Uses a fixed number of buckets for file groups per partition which cannot shrink or expand. This works for both COW and\nMOR tables. Since the num of buckets cannot be changed and design of one-on-one mapping between buckets and file groups,\nthis index might not suit well for highly skewed partitions. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CONSISTENT_HASHING"),": Supports dynamic number of buckets with bucket resizing to properly size each bucket. This\nsolves potential data skew problem where partitions with high volume of data can be dynamically resized to have\nmultiple buckets that are reasonably sized in contrast to the fixed number of buckets per partition in SIMPLE\nbucket engine type. This only works with MOR tables."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"RECORD_INDEX:")," Index which saves the record key to location mappings in the HUDI Metadata Table. Record index is a\nglobal index, enforcing key uniqueness across all partitions in the table. Supports sharding to achieve very high scale."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Bring your own implementation:")," You can extend this ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/hudi/blob/master/hudi-client/hudi-client-common/src/main/java/org/apache/hudi/index/HoodieIndex.java"},"public API"),"\nto implement custom indexing.")),(0,i.kt)("p",null,"Writers can pick one of these options using ",(0,i.kt)("inlineCode",{parentName:"p"},"hoodie.index.type")," config option. Additionally, a custom index implementation can also be employed\nusing ",(0,i.kt)("inlineCode",{parentName:"p"},"hoodie.index.class")," and supplying a subclass of ",(0,i.kt)("inlineCode",{parentName:"p"},"SparkHoodieIndex")," (for Apache Spark writers)"),(0,i.kt)("h3",{id:"global-and-non-global-indexes"},"Global and Non-Global Indexes"),(0,i.kt)("p",null,"Another key aspect worth understanding is the difference between global and non-global indexes. Both bloom and simple index have\nglobal options - ",(0,i.kt)("inlineCode",{parentName:"p"},"hoodie.index.type=GLOBAL_BLOOM")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"hoodie.index.type=GLOBAL_SIMPLE")," - respectively. Record index and\nHBase index are by nature a global index."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Global index:"),"  Global indexes enforce uniqueness of keys across all partitions of a table i.e guarantees that exactly\none record exists in the table for a given record key. Global indexes offer stronger guarantees, but the update/delete\ncost can still grow with size of the table ",(0,i.kt)("inlineCode",{parentName:"li"},"O(size of table)"),", since the record could belong to any partition in storage.\nIn case of non-global index, lookup involves file groups only for the matching partitions from the incoming records and\nso its not impacted by the total size of the table. These global indexes(GLOBAL_SIMPLE or GLOBAL_BLOOM), might be\nacceptable for decent sized tables, but for large tables, a newly added index (0.14.0) called Record Level Index (RLI),\ncan offer pretty good index lookup performance compared to other global indices(GLOBAL_SIMPLE or GLOBAL_BLOOM) or\nHbase and also avoids the operational overhead of maintaining external systems."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Non Global index:")," On the other hand, the default index implementations enforce this constraint only within a specific partition.\nAs one might imagine, non global indexes depends on the writer to provide the same consistent partition path for a given record key during update/delete,\nbut can deliver much better performance since the index lookup operation becomes ",(0,i.kt)("inlineCode",{parentName:"li"},"O(number of records updated/deleted)")," and\nscales well with write volume.")),(0,i.kt)("h3",{id:"configs"},"Configs"),(0,i.kt)("h4",{id:"spark-based-configs"},"Spark based configs"),(0,i.kt)("p",null,"For Spark DataSource, Spark SQL, DeltaStreamer and Structured Streaming following are the key configs that control\nindexing behavior. Please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/next/configurations#Common-Index-Configs-advanced-configs"},"Advanced Configs"),"\nfor more details. All these, support the index types mentioned ",(0,i.kt)("a",{parentName:"p",href:"#index-types-in-hudi"},"above"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Config Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hoodie.index.type"),(0,i.kt)("td",{parentName:"tr",align:null},"N/A ",(0,i.kt)("strong",{parentName:"td"},"(Required)")),(0,i.kt)("td",{parentName:"tr",align:null},"org.apache.hudi.index.HoodieIndex$IndexType: Determines how input records are indexed, i.e., looked up based on the key for the location in the existing table. Default is SIMPLE on Spark engine, and INMEMORY on Flink and Java engines. Possible Values: ",(0,i.kt)("br",null)," ",(0,i.kt)("ul",null,(0,i.kt)("li",null,"BLOOM"),(0,i.kt)("li",null,"GLOBAL_BLOOM"),(0,i.kt)("li",null,"SIMPLE"),(0,i.kt)("li",null,"GLOBAL_SIMPLE"),(0,i.kt)("li",null,"HBASE"),(0,i.kt)("li",null,"INMEMORY"),(0,i.kt)("li",null,"FLINK_STATE"),(0,i.kt)("li",null,"BUCKET"),(0,i.kt)("li",null,"RECORD_INDEX")),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"Config Param: INDEX_TYPE"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hoodie.index.bucket.engine"),(0,i.kt)("td",{parentName:"tr",align:null},"SIMPLE (Optional)"),(0,i.kt)("td",{parentName:"tr",align:null},"org.apache.hudi.index.HoodieIndex$BucketIndexEngineType: Determines the type of bucketing or hashing to use when ",(0,i.kt)("inlineCode",{parentName:"td"},"hoodie.index.type")," is set to ",(0,i.kt)("inlineCode",{parentName:"td"},"BUCKET"),".    Possible Values: ",(0,i.kt)("br",null)," ",(0,i.kt)("ul",null,(0,i.kt)("li",null,"SIMPLE"),(0,i.kt)("li",null,"CONSISTENT_HASHING"))," ",(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"Config Param: BUCKET_INDEX_ENGINE_TYPE"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"Since Version: 0.11.0"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hoodie.index.class"),(0,i.kt)("td",{parentName:"tr",align:null},"(Optional)"),(0,i.kt)("td",{parentName:"tr",align:null},"Full path of user-defined index class and must be a subclass of HoodieIndex class. It will take precedence over the hoodie.index.type configuration if specified",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"Config Param: INDEX_CLASS_NAME"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hoodie.bloom.index.update.partition.path"),(0,i.kt)("td",{parentName:"tr",align:null},"true (Optional)"),(0,i.kt)("td",{parentName:"tr",align:null},"Only applies if index type is GLOBAL_BLOOM. When set to true, an update including the partition path of a record that already exists will result in inserting the incoming record into the new partition and deleting the original record in the old partition. When set to false, the original record will only be updated in the old partition, ignoring the new incoming partition if there is a mis-match between partition value for an incoming record with whats in storage.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"Config Param: BLOOM_INDEX_UPDATE_PARTITION_PATH_ENABLE"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hoodie.record.index.update.partition.path"),(0,i.kt)("td",{parentName:"tr",align:null},"false (Optional)"),(0,i.kt)("td",{parentName:"tr",align:null},"Similar to Key: 'hoodie.bloom.index.update.partition.path' , Only applies if index type is RECORD_INDEX. When set to true, an update including the partition path of a record that already exists will result in inserting the incoming record into the new partition and deleting the original record in the old partition. When set to false, the original record will only be updated in the old partition, ignoring the new incoming partition if there is a mis-match between partition value for an incoming record with whats in storage. ",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"Config Param: RECORD_INDEX_UPDATE_PARTITION_PATH_ENABLE"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hoodie.simple.index.update.partition.path"),(0,i.kt)("td",{parentName:"tr",align:null},"true (Optional)"),(0,i.kt)("td",{parentName:"tr",align:null},"Similar to Key: 'hoodie.bloom.index.update.partition.path' , Only applies if index type is GLOBAL_SIMPLE. When set to true, an update including the partition path of a record that already exists will result in inserting the incoming record into the new partition and deleting the original record in the old partition. When set to false, the original record will only be updated in the old partition, ignoring the new incoming partition if there is a mis-match between partition value for an incoming record with whats in storage. ",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"Config Param: SIMPLE_INDEX_UPDATE_PARTITION_PATH_ENABLE"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hoodie.hbase.index.update.partition.path"),(0,i.kt)("td",{parentName:"tr",align:null},"false (Optional)"),(0,i.kt)("td",{parentName:"tr",align:null},"Only applies if index type is HBASE. When an already existing record is upserted to a new partition compared to whats in storage, this config when set, will delete old record in old partition and will insert it as new record in new partition.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},"Config Param: UPDATE_PARTITION_PATH_ENABLE"))))),(0,i.kt)("h4",{id:"flink-based-configs"},"Flink based configs"),(0,i.kt)("p",null,"For Flink DataStream and Flink SQL only support Bucket Index and internal Flink state store backed in memory index.\nFollowing are the basic configs that control the indexing behavior. Please refer ",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/next/configurations#Flink-Options-advanced-configs"},"here"),"\nfor advanced configs."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Config Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"index.type"),(0,i.kt)("td",{parentName:"tr",align:null},"FLINK_STATE (Optional)"),(0,i.kt)("td",{parentName:"tr",align:null},"Index type of Flink write job, default is using state backed index. Possible values:",(0,i.kt)("br",null)," ",(0,i.kt)("ul",null,(0,i.kt)("li",null,"FLINK_STATE"),(0,i.kt)("li",null,"BUCKET")),(0,i.kt)("br",null),"  ",(0,i.kt)("inlineCode",{parentName:"td"},"Config Param: INDEX_TYPE"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hoodie.index.bucket.engine"),(0,i.kt)("td",{parentName:"tr",align:null},"SIMPLE (Optional)"),(0,i.kt)("td",{parentName:"tr",align:null},"org.apache.hudi.index.HoodieIndex$BucketIndexEngineType: Determines the type of bucketing or hashing to use when ",(0,i.kt)("inlineCode",{parentName:"td"},"hoodie.index.type")," is set to ",(0,i.kt)("inlineCode",{parentName:"td"},"BUCKET"),".    Possible Values: ",(0,i.kt)("br",null)," ",(0,i.kt)("ul",null,(0,i.kt)("li",null,"SIMPLE"),(0,i.kt)("li",null,"CONSISTENT_HASHING")))))),(0,i.kt)("h2",{id:"indexing-strategies"},"Indexing Strategies"),(0,i.kt)("p",null,"Since data comes in at different volumes, velocity and has different access patterns, different indices could be used for different workload types.\nLet\u2019s walk through some typical workload types and see how to leverage the right Hudi index for such use-cases.\nThis is based on our experience and you should diligently decide if the same strategies are best for your workloads."),(0,i.kt)("h3",{id:"workload-1-late-arriving-updates-to-fact-tables"},"Workload 1: Late arriving updates to fact tables"),(0,i.kt)("p",null,"Many companies store large volumes of transactional data in NoSQL data stores. For eg, trip tables in case of ride-sharing, buying and selling of shares,\norders in an e-commerce site. These tables are usually ever growing with random updates on most recent data with long tail updates going to older data, either\ndue to transactions settling at a later date/data corrections. In other words, most updates go into the latest partitions with few updates going to older ones."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Fact table",src:n(8409).Z}),"\n",(0,i.kt)("em",{parentName:"p"},"Figure: Typical update pattern for Fact tables")),(0,i.kt)("p",null,"For such workloads, the ",(0,i.kt)("inlineCode",{parentName:"p"},"BLOOM")," index performs well, since index look-up will prune a lot of data files based on a well-sized bloom filter.\nAdditionally, if the keys can be constructed such that they have a certain ordering, the number of files to be compared is further reduced by range pruning.\nHudi constructs an interval tree with all the file key ranges and efficiently filters out the files that don't match any key ranges in the updates/deleted records."),(0,i.kt)("p",null,"In order to efficiently compare incoming record keys against bloom filters i.e with minimal number of bloom filter reads and uniform distribution of work across\nthe executors, Hudi leverages caching of input records and employs a custom partitioner that can iron out data skews using statistics. At times, if the bloom filter\nfalse positive ratio is high, it could increase the amount of data shuffled to perform the lookup. Hudi supports dynamic bloom filters\n(enabled using ",(0,i.kt)("inlineCode",{parentName:"p"},"hoodie.bloom.index.filter.type=DYNAMIC_V0"),"), which adjusts its size based on the number of records stored in a given file to deliver the\nconfigured false positive ratio."),(0,i.kt)("h3",{id:"workload-2-de-duplication-in-event-tables"},"Workload 2: De-Duplication in event tables"),(0,i.kt)("p",null,'Event Streaming is everywhere. Events coming from Apache Kafka or similar message bus are typically 10-100x the size of fact tables and often treat "time" (event\'s arrival time/processing\ntime) as a first class citizen. For eg, IoT event stream, click stream data, ad impressions etc. Inserts and updates only span the last few partitions as these are mostly append only data.\nGiven duplicate events can be introduced anywhere in the end-end pipeline, de-duplication before storing on the data lake is a common requirement.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Event table",src:n(52704).Z}),"\n",(0,i.kt)("em",{parentName:"p"},"Figure showing the spread of updates for Event table.")),(0,i.kt)("p",null,"In general, this is a very challenging problem to solve at lower cost. Although, we could even employ a key value store to perform this de-duplication with HBASE index, the index storage\ncosts would grow linear with number of events and thus can be prohibitively expensive. In fact, ",(0,i.kt)("inlineCode",{parentName:"p"},"BLOOM")," index with range pruning is the optimal solution here. One can leverage the fact\nthat time is often a first class citizen and construct a key such as ",(0,i.kt)("inlineCode",{parentName:"p"},"event_ts + event_id")," such that the inserted records have monotonically increasing keys. This yields great returns\nby pruning large amounts of files even within the latest table partitions."),(0,i.kt)("h3",{id:"workload-3-random-updatesdeletes-to-a-dimension-table"},"Workload 3: Random updates/deletes to a dimension table"),(0,i.kt)("p",null,"These types of tables usually contain high dimensional data and hold reference data e.g user profile, merchant information. These are high fidelity tables where the updates are often small but also spread\nacross a lot of partitions and data files ranging across the dataset from old to new. Often times, these tables are also un-partitioned, since there is also not a good way to partition these tables."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Dimensions table",src:n(94901).Z}),"\n",(0,i.kt)("em",{parentName:"p"},"Figure showing the spread of updates for Dimensions table.")),(0,i.kt)("p",null,"As discussed before, the ",(0,i.kt)("inlineCode",{parentName:"p"},"BLOOM")," index may not yield benefits if a good number of files cannot be pruned out by comparing ranges/filters. In such a random write workload, updates end up touching\nmost files within in the table and thus bloom filters will typically indicate a true positive for all files based on some incoming update. Consequently, we would end up comparing ranges/filter, only\nto finally check the incoming updates against all files. The ",(0,i.kt)("inlineCode",{parentName:"p"},"SIMPLE")," Index will be a better fit as it does not do any upfront pruning based, but directly joins with interested fields from every data file.\n",(0,i.kt)("inlineCode",{parentName:"p"},"HBASE")," index can be employed, if the operational overhead is acceptable and would provide much better lookup times for these tables."),(0,i.kt)("p",null,"When using a global index, users should also consider setting ",(0,i.kt)("inlineCode",{parentName:"p"},"hoodie.bloom.index.update.partition.path=true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"hoodie.simple.index.update.partition.path=true")," to deal with cases where the\npartition path value could change due to an update e.g users table partitioned by home city; user relocates to a different city. These tables are also excellent candidates for the Merge-On-Read table type."),(0,i.kt)("h2",{id:"related-resources"},"Related Resources"),(0,i.kt)("h3",null,"Videos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/XlRvMFJ7g9c"},"Global Bloom Index: Remove duplicates & guarantee uniquness - Hudi Labs"))))}u.isMDXComponent=!0},94901:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Dimension20tables-6bbe96fbe9102541487b1819532f6bd4.gif"},52704:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Event20tables-8998b57588a66cb2f5d3e9233dfb6d0f.gif"},8409:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Fact20tables-0255e82a96683124f7116060e9f76cbe.gif"},21554:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/with-and-without-index-81d481917e61e4cd1be2426c12994b8b.png"}}]);