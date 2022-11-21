function buttonClick() {
 var mstdnsvr = document.getElementById('mstdn_url');
 var dd = document.getElementById('date');
 var trnsp = document.getElementById('transport');
 var brnd = document.getElementById('brand');
 var nbrg = document.getElementById('numbering')
 var ln = document.getElementById('line');
 var ids = document.getElementById('ids');
 var fr = document.getElementById('for');
 var gton = document.getElementById('geton');
 var gtof = document.getElementById('getoff');
 var vhcl = document.getElementById('vehicle');
 var cmt = document.getElementById('comment');
 var hash1 = document.getElementById('hash1');
 var hash2 = document.getElementById('hash2');

 var gene = mstdnsvr.value + "/share?text=" + dd.value + "%0a" + trnsp.value + "%20" + brnd.value + "%0a" + nbrg.value + "%20" + ln.value + "%0a" + ids.value + "%20" + "/" + "%20" + fr.value + "行" + "%0a" + gton.value + "%20" + "→" + "%20" + gtof.value + "%0a" + cmt.value ;

 const url = gene;
 window.open(url, '_blank')
}
