/* WebDB v0.1.0 - 1/20/2014
   http://
   Copyright (c) 2014  - Licensed  */
(function(){var a,b,c,d,e,f;window.indexedDB=window.indexedDB||window.webkitIndexedDB||window.mozIndexedDB;c=function(){b.prototype.db=null;function b(b,c,d,e,f){var g,h;this.name=b;this.schema=c;this.version=d;this.size=e!=null?e:5242880;if(window.openDatabase){h=new a.webSQL(this.name,this.schema,this.version,this.size,f)}else if(window.indexedDB){this.schema=function(){var a;a=[];for(g in this.schema){a.push(g)}return a}.call(this);h=new a.indexedDB(this.name,this.schema,this.version,f)}if(!window.openDatabase&&!window.indexedDB){this.select=function(){throw"HTML5 Databases not supported"};this.insert=function(){throw"HTML5 Databases not supported"};this.update=function(){throw"HTML5 Databases not supported"};this["delete"]=function(){throw"HTML5 Databases not supported"};this.drop=function(){throw"HTML5 Databases not supported"};this.execute=function(){throw"HTML5 Databases not supported"};throw"HTML5 Databases not supported"}this.db=h.db;this.select=function(){return h.select.apply(h,arguments)};this.insert=function(){return h.insert.apply(h,arguments)};this.update=function(){return h.update.apply(h,arguments)};this["delete"]=function(){return h["delete"].apply(h,arguments)};this.drop=function(){return h.drop.apply(h,arguments)};this.execute=function(){return h.execute.apply(h,arguments)}}return b}();a=window.WebDB=c;e=function(a,b){var c,d;d=[];for(c in b){d.push(a[c]=b[c])}return d};f=function(a){return Object.prototype.toString.call(a).match(/[a-zA-Z] ([a-zA-Z]+)/)[1].toLowerCase()};b=function(){var a,b,c;d.prototype.db=null;function d(a,b,c,e){var f,g=this;if(c==null){c=1}if(!window.indexedDB){throw"IndexedDB not supported"}f=d.open(a,c);f.onsuccess=function(a){g.db=a.target.result;if(e!=null){return e.call(e)}};f.onerror=function(a){throw"Error opening database"};f.onupgradeneeded=function(a){var c,d,e,f,h;g.db=a.target.result;c={keyPath:"key",autoIncrement:true};h=[];for(e=0,f=b.length;e<f;e++){d=b[e];if(!g.db.objectStoreNames.contains(d)){h.push(g.db.createObjectStore(d,c))}else{h.push(void 0)}}return h};f.onversionchange=function(a){return console.log(a)}}d.prototype.select=function(a,c,d){if(c==null){c=[]}return b(this.db,a,null,c,d)};d.prototype.insert=function(a,b,d){var e,g,h,i,j;if(f(b)==="object"){return c(this,a,b,d)}else{e=b.length;j=[];for(h=0,i=b.length;h<i;h++){g=b[h];j.push(c(this,a,g,function(){e--;if(e===0&&d!=null){return d.call(d,b.length)}}))}return j}};d.prototype.update=function(a,c,d,e){if(d==null){d=[]}return b(this.db,a,c,d,function(a){if(e!=null){return e.call(e,a.length)}})};d.prototype["delete"]=function(b,c,d){var e,f,g;if(c==null){c=[]}try{f=0;g=this.db.transaction([b],"readwrite").objectStore(b);return g.openCursor().onsuccess=function(b){var e,h;e=b.target.result;if(e){h=e.value;if(a(h,c)){f++;g["delete"](e.primaryKey)}return e["continue"]()}else{if(d!=null){return d.call(d,f)}}}}catch(h){e=h;if(d!=null){return d.call(d)}}};d.prototype.drop=function(a,b){var c,d;try{d=this.db.transaction([a],"readwrite").objectStore(a);d.openCursor().onsuccess=function(a){var b;b=a.target.result;if(b){d["delete"](b.primaryKey);return b["continue"]()}};if(b!=null){return b.call(b)}}catch(e){c=e;if(b!=null){return b.call(b)}}};d.prototype.execute=function(a,b){return""};c=function(a,b,c,d){var e,f;f=a.db.transaction([b],"readwrite").objectStore(b);e=f.add(c);e.onerror=function(a){if(d!=null){return d.call(d,null)}};return e.onsuccess=function(a){if(d!=null){return d.call(d,1)}}};a=function(a,b){var c,d,e,f,g;if(b==null){b=[]}if(b.length===0){return true}for(f=0,g=b.length;f<g;f++){e=b[f];d=true;for(c in e){if(a[c]!==e[c]){d=false;break}}if(d===true){return true}}return false};b=function(b,c,d,f,g){var h,i;if(f==null){f=[]}i=[];h=d!=null?"readwrite":"readonly";return b.transaction([c],h).objectStore(c).openCursor().onsuccess=function(b){var c,h;c=b.target.result;if(c){h=c.value;if(a(h,f)){if(d!=null){e(h,d);e(c.value,d);c.update(c.value)}i.push(h)}return c["continue"]()}else{if(g!=null){return g.call(g,i)}}}};return d}();a.indexedDB=b;d=function(){var a,b,c,d;e.prototype.db=null;d=null;function e(a,b,c,e,f){var g,h,i,j;if(e==null){e=5}if(!window.openDatabase){throw"WebSQL not supported"}e=e*1024*1024;this.db=openDatabase(a,c,"",e);j=0;for(i in b){h="CREATE TABLE IF NOT EXISTS "+i+" (";for(g in b[i]){h+=""+g+" "+b[i][g]+","}h=h.substring(0,h.length-1)+")";j++;d=this;this.execute(h,function(){j--;if(j===0&&f!=null){return f.call(f)}})}}e.prototype.select=function(a,c,d){var e;if(c==null){c=[]}e="SELECT * FROM "+a+b(c);return this.execute(e,d)};e.prototype.insert=function(b,c,d){var e,g,h,i,j,k;if(f(c)==="object"){return a(b,c,d)}else{e=c.length;g=0;k=[];for(i=0,j=c.length;i<j;i++){h=c[i];k.push(a(b,h,function(a){e--;g++;if(e===0&&d!=null){return d.call(d,g)}}))}return k}};e.prototype.update=function(a,d,e,f){var g,h;if(e==null){e=[]}h="UPDATE "+a+" SET ";for(g in d){h+=""+g+" = "+c(d[g])+", "}h=h.substring(0,h.length-2)+b(e);return this.execute(h,f)};e.prototype["delete"]=function(a,c,d){var e;if(c==null){c=[]}e="DELETE FROM "+a+" "+b(c);return this.execute(e,d)};e.prototype.drop=function(a,b){return this.execute("DROP TABLE IF EXISTS "+a,b)};e.prototype.execute=function(a,b){if(!this.db){throw"Database not initializated"}else{return this.db.transaction(function(c){return c.executeSql(a,[],function(c,d){var e,f;f=[];if(a.indexOf("SELECT")!==-1){f=function(){var a,b,c;c=[];for(e=a=0,b=d.rows.length;0<=b?a<b:a>b;e=0<=b?++a:--a){c.push(d.rows.item(e))}return c}();if(b!=null){return b.call(b,f)}}else{if(b!=null){return b.call(b,d.rowsAffected)}}})})}};a=function(a,b,e){var f,g,h;h="INSERT INTO "+a+" (";f="(";for(g in b){h+=""+g+", ";f+=""+c(b[g])+", "}h=h.substring(0,h.length-2)+") ";f=f.substring(0,f.length-2)+") ";h+=" VALUES "+f;return d.execute(h,e)};b=function(a){var b,d,e,f,g,h;if(a.length>0){e=" WHERE (";for(g=0,h=a.length;g<h;g++){b=a[g];for(d in b){f=b[d];e+=""+d+" = "+c(f)+" AND "}e=e.substring(0,e.length-5)+") OR ("}return e.substring(0,e.length-5)}else{return""}};c=function(a){if(isNaN(a)){return"'"+a+"'"}else{return a}};return e}();a.webSQL=d}).call(this);