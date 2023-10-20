"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[12471],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),m=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=m(a),k=r,y=s["".concat(d,".").concat(k)]||s[k]||u[k]||i;return a?n.createElement(y,l(l({ref:t},p),{},{components:a})):n.createElement(y,l({ref:t},p))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},7700:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const i={title:"Key Generation",summary:"In this page, we describe key generation in Hudi.",toc:!0,last_modified_at:null},l=void 0,o={unversionedId:"key_generation",id:"version-0.14.0/key_generation",title:"Key Generation",description:"Every record in Hudi is uniquely identified by a primary key, which is a pair of record key and partition path where the record belongs to.",source:"@site/versioned_docs/version-0.14.0/key_generation.md",sourceDirName:".",slug:"/key_generation",permalink:"/cn/docs/key_generation",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.14.0/key_generation.md",tags:[],version:"0.14.0",frontMatter:{title:"Key Generation",summary:"In this page, we describe key generation in Hudi.",toc:!0,last_modified_at:null},sidebar:"docs",previous:{title:"Schema Evolution",permalink:"/cn/docs/schema_evolution"},next:{title:"Concurrency Control",permalink:"/cn/docs/concurrency_control"}},d=[{value:"Key Generators",id:"key-generators",children:[{value:"SimpleKeyGenerator",id:"simplekeygenerator",children:[],level:3},{value:"ComplexKeyGenerator",id:"complexkeygenerator",children:[],level:3},{value:"NonpartitionedKeyGenerator",id:"nonpartitionedkeygenerator",children:[],level:3},{value:"CustomKeyGenerator",id:"customkeygenerator",children:[],level:3},{value:"Bring your own implementation",id:"bring-your-own-implementation",children:[],level:3},{value:"TimestampBasedKeyGenerator",id:"timestampbasedkeygenerator",children:[{value:"Timestamp is GMT",id:"timestamp-is-gmt",children:[],level:4},{value:"Timestamp is DATE_STRING",id:"timestamp-is-date_string",children:[],level:4},{value:"Scalar examples",id:"scalar-examples",children:[],level:4},{value:"ISO8601WithMsZ with Single Input format",id:"iso8601withmsz-with-single-input-format",children:[],level:4},{value:"ISO8601WithMsZ with Multiple Input formats",id:"iso8601withmsz-with-multiple-input-formats",children:[],level:4},{value:"ISO8601NoMs with offset using multiple input formats",id:"iso8601noms-with-offset-using-multiple-input-formats",children:[],level:4},{value:"Input as short date string and expect date in date format",id:"input-as-short-date-string-and-expect-date-in-date-format",children:[],level:4}],level:3}],level:2}],m={toc:d},p="wrapper";function s(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Every record in Hudi is uniquely identified by a primary key, which is a pair of record key and partition path where the record belongs to.\nUsing primary keys, Hudi can impose a) partition level uniqueness integrity constraint b) enable fast updates and deletes on records.\nOne should choose the partitioning scheme wisely as it could be a determining factor for your ingestion and query latency.\nSome use cases do not have a naturally present record key, for ex. log ingestion type of payloads. For these type of use cases,\nusers do not have to specify the record key field explicitly anymore and Hudi can automatically generate record keys\n(from Hudi version 0.14.0, Hudi can automatically generate record keys if not specified explicitly) that are efficient\nfor compute, storage and read to meet the uniqueness requirements of the primary key. "),(0,r.kt)("p",null,"In general, Hudi supports both partitioned and global indexes. For a dataset with partitioned index(which is most commonly used),\neach record is uniquely identified by a pair of record key and partition path. But for a dataset with global index, each record\nis uniquely identified by just the record key. There won't be any duplicate record keys across partitions."),(0,r.kt)("h2",{id:"key-generators"},"Key Generators"),(0,r.kt)("p",null,"Hudi provides several key generators out of the box that users can use based on their need, while having a pluggable\nimplementation for users to implement and use their own KeyGenerator. This page goes over all different types of key\ngenerators that are readily available to use."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/6f9b02decb5bb2b83709b1b6ec04a97e4d102c11/hudi-common/src/main/java/org/apache/hudi/keygen/KeyGenerator.java"},"Here"),"\nis the interface for KeyGenerator in Hudi for your reference."),(0,r.kt)("p",null,"Before diving into different types of key generators, let\u2019s go over some of the common configs relevant to key generators."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Config Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hoodie.datasource.write.recordkey.field"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A (Optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"Record key field. Value to be used as the ",(0,r.kt)("inlineCode",{parentName:"td"},"recordKey")," component of ",(0,r.kt)("inlineCode",{parentName:"td"},"HoodieKey"),". ",(0,r.kt)("ul",null,(0,r.kt)("li",null,"When configured, actual value will be obtained by invoking .toString() on the field value. Nested fields can be specified using the dot notation eg: ",(0,r.kt)("inlineCode",{parentName:"td"},"a.b.c"),". "),(0,r.kt)("li",null,"When not configured record key will be automatically generated by Hudi. This feature is handy for use cases like log ingestion that do not have a naturally present record key."))," ",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"Config Param: RECORDKEY_FIELD_NAME"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hoodie.datasource.write.partitionpath.field"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A (Optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"Partition path field. Value to be used at the partitionPath component of HoodieKey. This needs to be specified if a partitioned table is desired. Actual value obtained by invoking .toString()",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"Config Param: PARTITIONPATH_FIELD_NAME"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hoodie.datasource.write.keygenerator.class"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A (Optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"Key generator class, that implements ",(0,r.kt)("inlineCode",{parentName:"td"},"org.apache.hudi.keygen.KeyGenerator")," extract a key out of incoming records. ",(0,r.kt)("ul",null,(0,r.kt)("li",null,"When set, the configured value takes precedence to be in effect and automatic inference is not triggered."),(0,r.kt)("li",null,"When not configured, if ",(0,r.kt)("inlineCode",{parentName:"td"},"hoodie.datasource.write.keygenerator.type")," is set, the configured value is used else automatic inference is triggered."),(0,r.kt)("li",null,"In case of auto generated record keys, if neither the key generator class nor type are configured, Hudi will also auto infer the partitioning. for eg, if partition field is not configured, hudi will assume its non-partitioned. "))," ",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"Config Param: KEYGENERATOR_CLASS_NAME"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hoodie.datasource.write.hive_style_partitioning"),(0,r.kt)("td",{parentName:"tr",align:null},"false (Optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"Flag to indicate whether to use Hive style partitioning. If set true, the names of partition folders follow ","<","partition_column_name",">","=","<","partition_value",">"," format. By default false (the names of partition folders are only partition values)",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"Config Param: HIVE_STYLE_PARTITIONING_ENABLE"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hoodie.datasource.write.partitionpath.urlencode"),(0,r.kt)("td",{parentName:"tr",align:null},"false (Optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"Should we url encode the partition path value, before creating the folder structure.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"Config Param: URL_ENCODE_PARTITIONING"))))),(0,r.kt)("p",null,"For all advanced configs refer ",(0,r.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/configurations#KEY_GENERATOR"},"here"),"."),(0,r.kt)("p",null,"Lets go over different key generators available to be used with Hudi."),(0,r.kt)("h3",{id:"simplekeygenerator"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/apache/hudi/blob/master/hudi-client/hudi-spark-client/src/main/java/org/apache/hudi/keygen/SimpleKeyGenerator.java"},"SimpleKeyGenerator")),(0,r.kt)("p",null,"Record key refers to one field(column in dataframe) by name and partition path refers to one field (single column in dataframe)\nby name. This is one of the most commonly used one. Values are interpreted as is from dataframe and converted to string. "),(0,r.kt)("h3",{id:"complexkeygenerator"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/apache/hudi/blob/master/hudi-client/hudi-spark-client/src/main/java/org/apache/hudi/keygen/ComplexKeyGenerator.java"},"ComplexKeyGenerator")),(0,r.kt)("p",null,"Both record key and partition paths comprise one or more than one field by name(combination of multiple fields). Fields\nare expected to be comma separated in the config value. For example ",(0,r.kt)("inlineCode",{parentName:"p"},'"Hoodie.datasource.write.recordkey.field" : \u201ccol1,col4\u201d')),(0,r.kt)("h3",{id:"nonpartitionedkeygenerator"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/apache/hudi/blob/master/hudi-client/hudi-spark-client/src/main/java/org/apache/hudi/keygen/NonpartitionedKeyGenerator.java"},"NonpartitionedKeyGenerator")),(0,r.kt)("p",null,"If your hudi dataset is not partitioned, you could use this \u201cNonpartitionedKeyGenerator\u201d which will return an empty\npartition for all records. In other words, all records go to the same partition (which is empty \u201c\u201d)"),(0,r.kt)("h3",{id:"customkeygenerator"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/apache/hudi/blob/master/hudi-client/hudi-spark-client/src/main/java/org/apache/hudi/keygen/CustomKeyGenerator.java"},"CustomKeyGenerator")),(0,r.kt)("p",null,"This is a generic implementation of KeyGenerator where users are able to leverage the benefits of SimpleKeyGenerator,\nComplexKeyGenerator and TimestampBasedKeyGenerator all at the same time. One can configure record key and partition\npaths as a single field or a combination of fields. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"hoodie.datasource.write.recordkey.field\nhoodie.datasource.write.partitionpath.field\nhoodie.datasource.write.keygenerator.class=org.apache.hudi.keygen.CustomKeyGenerator\n")),(0,r.kt)("p",null,"This keyGenerator is particularly useful if you want to define\ncomplex partition paths involving regular fields and timestamp based fields. It expects value for prop ",(0,r.kt)("inlineCode",{parentName:"p"},'"hoodie.datasource.write.partitionpath.field"'),'\nin a specific format. The format should be "field1:PartitionKeyType1,field2:PartitionKeyType2..."'),(0,r.kt)("p",null,"The complete partition path is created as\n",(0,r.kt)("inlineCode",{parentName:"p"},"<value for field1 basis PartitionKeyType1>/<value for field2 basis PartitionKeyType2> "),"\nand so on. Each partition key type could either be SIMPLE or TIMESTAMP."),(0,r.kt)("p",null,"Example config value: ",(0,r.kt)("inlineCode",{parentName:"p"},"\u201cfield_3:simple,field_5:timestamp\u201d")),(0,r.kt)("p",null,"RecordKey config value is either single field incase of SimpleKeyGenerator or a comma separate field names if referring to ComplexKeyGenerator.\nExample:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"hoodie.datasource.write.recordkey.field=field1,field2\n")),(0,r.kt)("p",null,"This will create your record key in the format ",(0,r.kt)("inlineCode",{parentName:"p"},"field1:value1,field2:value2")," and so on, otherwise you can specify only one field in case of simple record keys. ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomKeyGenerator")," class defines an enum ",(0,r.kt)("inlineCode",{parentName:"p"},"PartitionKeyType")," for configuring partition paths. It can take two possible values - SIMPLE and TIMESTAMP.\nThe value for ",(0,r.kt)("inlineCode",{parentName:"p"},"hoodie.datasource.write.partitionpath.field")," property in case of partitioned tables needs to be provided in the format ",(0,r.kt)("inlineCode",{parentName:"p"},"field1:PartitionKeyType1,field2:PartitionKeyType2")," and so on. For example, if you want to create partition path using 2 fields ",(0,r.kt)("inlineCode",{parentName:"p"},"country")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"date")," where the latter has timestamp based values and needs to be customised in a given format, you can specify the following"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"hoodie.datasource.write.partitionpath.field=country:SIMPLE,date:TIMESTAMP\n")),(0,r.kt)("p",null,"This will create the partition path in the format ",(0,r.kt)("inlineCode",{parentName:"p"},"<country_name>/<date>")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"country=<country_name>/date=<date>")," depending on whether you want hive style partitioning or not."),(0,r.kt)("h3",{id:"bring-your-own-implementation"},"Bring your own implementation"),(0,r.kt)("p",null,"You can implement your own custom key generator by extending the public API class here:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/master/hudi-common/src/main/java/org/apache/hudi/keygen/KeyGenerator.java"},"https://github.com/apache/hudi/blob/master/hudi-common/src/main/java/org/apache/hudi/keygen/KeyGenerator.java")),(0,r.kt)("h3",{id:"timestampbasedkeygenerator"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/apache/hudi/blob/master/hudi-client/hudi-spark-client/src/main/java/org/apache/hudi/keygen/TimestampBasedKeyGenerator.java"},"TimestampBasedKeyGenerator")),(0,r.kt)("p",null,"This key generator relies on timestamps for the partition field. The field values are interpreted as timestamps\nand not just converted to string while generating partition path value for records.  Record key is same as before where it is chosen by\nfield name.  Users are expected to set few more configs to use this KeyGenerator."),(0,r.kt)("p",null,"Configs to be set:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Config Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hoodie.keygen.timebased.timestamp.type"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A ",(0,r.kt)("strong",{parentName:"td"},"(Required)")),(0,r.kt)("td",{parentName:"tr",align:null},"Required only when the key generator is TimestampBasedKeyGenerator. One of the timestamp types supported(UNIX_TIMESTAMP, DATE_STRING, MIXED, EPOCHMILLISECONDS, SCALAR)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hoodie.keygen.timebased.output.dateformat"),(0,r.kt)("td",{parentName:"tr",align:null},'"" (Optional)'),(0,r.kt)("td",{parentName:"tr",align:null},"Output date format such as ",(0,r.kt)("inlineCode",{parentName:"td"},"yyyy-MM-dd'T'HH:mm:ss.SSSZ"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hoodie.keygen.timebased.timezone"),(0,r.kt)("td",{parentName:"tr",align:null},'"UTC" (Optional)'),(0,r.kt)("td",{parentName:"tr",align:null},"Timezone of both input and output timestamp if they are the same, such as ",(0,r.kt)("inlineCode",{parentName:"td"},"UTC"),".  Please use ",(0,r.kt)("inlineCode",{parentName:"td"},"hoodie.keygen.timebased.input.timezone")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"hoodie.keygen.timebased.output.timezone")," instead if the input and output timezones are different.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hoodie.keygen.timebased.input.dateformat"),(0,r.kt)("td",{parentName:"tr",align:null},'"" (Optional)'),(0,r.kt)("td",{parentName:"tr",align:null},"Input date format such as ",(0,r.kt)("inlineCode",{parentName:"td"},"yyyy-MM-dd'T'HH:mm:ss.SSSZ"),".")))),(0,r.kt)("p",null,"Let's go over some example values for TimestampBasedKeyGenerator."),(0,r.kt)("h4",{id:"timestamp-is-gmt"},"Timestamp is GMT"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Config Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hoodie.streamer.keygen.timebased.timestamp.type")),(0,r.kt)("td",{parentName:"tr",align:null},'"EPOCHMILLISECONDS"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hoodie.streamer.keygen.timebased.output.dateformat")),(0,r.kt)("td",{parentName:"tr",align:null},'"yyyy-MM-dd hh"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hoodie.streamer.keygen.timebased.timezone")),(0,r.kt)("td",{parentName:"tr",align:null},'"GMT+8:00"')))),(0,r.kt)("p",null,"Input Field value: \u201c1578283932000L\u201d ",(0,r.kt)("br",null),"\nPartition path generated from key generator: \u201c2020-01-06 12\u201d"),(0,r.kt)("p",null,"If input field value is null for some rows. ",(0,r.kt)("br",null),"\nPartition path generated from key generator: \u201c1970-01-01 08\u201d"),(0,r.kt)("h4",{id:"timestamp-is-date_string"},"Timestamp is DATE_STRING"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Config Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hoodie.streamer.keygen.timebased.timestamp.type")),(0,r.kt)("td",{parentName:"tr",align:null},'"DATE_STRING"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hoodie.streamer.keygen.timebased.output.dateformat")),(0,r.kt)("td",{parentName:"tr",align:null},'"yyyy-MM-dd hh"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hoodie.streamer.keygen.timebased.timezone")),(0,r.kt)("td",{parentName:"tr",align:null},'"GMT+8:00"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hoodie.streamer.keygen.timebased.input.dateformat")),(0,r.kt)("td",{parentName:"tr",align:null},'"yyyy-MM-dd hh:mm:ss"')))),(0,r.kt)("p",null,"Input field value: \u201c2020-01-06 12:12:12\u201d ",(0,r.kt)("br",null),"\nPartition path generated from key generator: \u201c2020-01-06 12\u201d"),(0,r.kt)("p",null,"If input field value is null for some rows. ",(0,r.kt)("br",null),"\nPartition path generated from key generator: \u201c1970-01-01 12:00:00\u201d"),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"scalar-examples"},"Scalar examples"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Config Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hoodie.streamer.keygen.timebased.timestamp.type")),(0,r.kt)("td",{parentName:"tr",align:null},'"SCALAR"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hoodie.streamer.keygen.timebased.output.dateformat")),(0,r.kt)("td",{parentName:"tr",align:null},'"yyyy-MM-dd hh"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hoodie.streamer.keygen.timebased.timezone")),(0,r.kt)("td",{parentName:"tr",align:null},'"GMT"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hoodie.streamer.keygen.timebased.timestamp.scalar.time.unit")),(0,r.kt)("td",{parentName:"tr",align:null},'"days"')))),(0,r.kt)("p",null,"Input field value: \u201c20000L\u201d ",(0,r.kt)("br",null),"\nPartition path generated from key generator: \u201c2024-10-04 12\u201d"),(0,r.kt)("p",null,"If input field value is null. ",(0,r.kt)("br",null),"\nPartition path generated from key generator: \u201c1970-01-02 12\u201d"),(0,r.kt)("h4",{id:"iso8601withmsz-with-single-input-format"},"ISO8601WithMsZ with Single Input format"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Config Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hoodie.streamer.keygen.timebased.timestamp.type")),(0,r.kt)("td",{parentName:"tr",align:null},'"DATE_STRING"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hoodie.streamer.keygen.timebased.input.dateformat")),(0,r.kt)("td",{parentName:"tr",align:null},"\"yyyy-MM-dd'T'HH:mm:ss.SSSZ\"")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hoodie.streamer.keygen.timebased.input.dateformat.list.delimiter.regex")),(0,r.kt)("td",{parentName:"tr",align:null},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hoodie.streamer.keygen.timebased.input.timezone")),(0,r.kt)("td",{parentName:"tr",align:null},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hoodie.streamer.keygen.timebased.output.dateformat")),(0,r.kt)("td",{parentName:"tr",align:null},'"yyyyMMddHH"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hoodie.streamer.keygen.timebased.output.timezone")),(0,r.kt)("td",{parentName:"tr",align:null},'"GMT"')))),(0,r.kt)("p",null,'Input field value: "2020-04-01T13:01:33.428Z" ',(0,r.kt)("br",null),'\nPartition path generated from key generator: "2020040113"'),(0,r.kt)("h4",{id:"iso8601withmsz-with-multiple-input-formats"},"ISO8601WithMsZ with Multiple Input formats"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Config Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hoodie.streamer.keygen.timebased.timestamp.type")),(0,r.kt)("td",{parentName:"tr",align:null},'"DATE_STRING"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hoodie.streamer.keygen.timebased.input.dateformat")),(0,r.kt)("td",{parentName:"tr",align:null},"\"yyyy-MM-dd'T'HH:mm:ssZ,yyyy-MM-dd'T'HH:mm:ss.SSSZ\"")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hoodie.streamer.keygen.timebased.input.dateformat.list.delimiter.regex")),(0,r.kt)("td",{parentName:"tr",align:null},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hoodie.streamer.keygen.timebased.input.timezone")),(0,r.kt)("td",{parentName:"tr",align:null},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hoodie.streamer.keygen.timebased.output.dateformat")),(0,r.kt)("td",{parentName:"tr",align:null},'"yyyyMMddHH"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hoodie.streamer.keygen.timebased.output.timezone")),(0,r.kt)("td",{parentName:"tr",align:null},'"UTC"')))),(0,r.kt)("p",null,'Input field value: "2020-04-01T13:01:33.428Z" ',(0,r.kt)("br",null),'\nPartition path generated from key generator: "2020040113"'),(0,r.kt)("h4",{id:"iso8601noms-with-offset-using-multiple-input-formats"},"ISO8601NoMs with offset using multiple input formats"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Config Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hoodie.streamer.keygen.timebased.timestamp.type")),(0,r.kt)("td",{parentName:"tr",align:null},'"DATE_STRING"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hoodie.streamer.keygen.timebased.input.dateformat")),(0,r.kt)("td",{parentName:"tr",align:null},"\"yyyy-MM-dd'T'HH:mm:ssZ,yyyy-MM-dd'T'HH:mm:ss.SSSZ\"")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hoodie.streamer.keygen.timebased.input.dateformat.list.delimiter.regex")),(0,r.kt)("td",{parentName:"tr",align:null},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hoodie.streamer.keygen.timebased.input.timezone")),(0,r.kt)("td",{parentName:"tr",align:null},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hoodie.streamer.keygen.timebased.output.dateformat")),(0,r.kt)("td",{parentName:"tr",align:null},'"yyyyMMddHH"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hoodie.streamer.keygen.timebased.output.timezone")),(0,r.kt)("td",{parentName:"tr",align:null},'"UTC"')))),(0,r.kt)("p",null,'Input field value: "2020-04-01T13:01:33-',(0,r.kt)("strong",{parentName:"p"},"05:00"),'" ',(0,r.kt)("br",null),'\nPartition path generated from key generator: "2020040118"'),(0,r.kt)("h4",{id:"input-as-short-date-string-and-expect-date-in-date-format"},"Input as short date string and expect date in date format"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Config Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hoodie.streamer.keygen.timebased.timestamp.type")),(0,r.kt)("td",{parentName:"tr",align:null},'"DATE_STRING"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hoodie.streamer.keygen.timebased.input.dateformat")),(0,r.kt)("td",{parentName:"tr",align:null},"\"yyyy-MM-dd'T'HH:mm:ssZ,yyyy-MM-dd'T'HH:mm:ss.SSSZ,yyyyMMdd\"")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hoodie.streamer.keygen.timebased.input.dateformat.list.delimiter.regex")),(0,r.kt)("td",{parentName:"tr",align:null},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hoodie.streamer.keygen.timebased.input.timezone")),(0,r.kt)("td",{parentName:"tr",align:null},'"UTC"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hoodie.streamer.keygen.timebased.output.dateformat")),(0,r.kt)("td",{parentName:"tr",align:null},'"MM/dd/yyyy"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hoodie.streamer.keygen.timebased.output.timezone")),(0,r.kt)("td",{parentName:"tr",align:null},'"UTC"')))),(0,r.kt)("p",null,'Input field value: "20200401" ',(0,r.kt)("br",null),'\nPartition path generated from key generator: "04/01/2020"'))}s.isMDXComponent=!0}}]);