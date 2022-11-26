function test() {
  var dd = document.getElementById('date');
  var trnsp = document.getElementById('transport');
  var brnd = document.getElementById('brand');
  var nbrg = document.getElementById('numbering');
  var ln = document.getElementById('line');
  var ids = document.getElementById('ids');
  var fr = document.getElementById('for');
  var gton = document.getElementById('geton');
  var gtof = document.getElementById('getoff');
  var vhcl = document.getElementById('vehicle');
  var cmt = document.getElementById('comment');
  var hs1 = document.getElementById('hash1');
  var hs2 = document.getElementById('hash2');

  if (hs1.value === '') {
    var gene = dd.value + "\n" + trnsp.value + " " + brnd.value + "\n" + nbrg.value + " " + ln.value + "\n" + ids.value + " " + "/" + " " + fr.value + "行" + "\n" + gton.value + " " + "→" + " " + gtof.value + "\n" + vhcl.value + "\n" + cmt.value;
  }else if (hs2.value === '') {
    var gene = dd.value + "\n" + trnsp.value + " " + brnd.value + "\n" + nbrg.value + " " + ln.value + "\n" + ids.value + " " + "/" + " " + fr.value + "行" + "\n" + gton.value + " " + "→" + " " + gtof.value + "\n" + vhcl.value + "\n" + cmt.value + "\n" + "#" + hs1.value;
  }else{
    var gene = dd.value + "\n" + trnsp.value + " " + brnd.value + "\n" + nbrg.value + " " + ln.value + "\n" + ids.value + " " + "/" + " " + fr.value + "行" + "\n" + gton.value + " " + "→" + " " + gtof.value + "\n" + vhcl.value + "\n" + cmt.value + "\n" + "#" + hs1.value + " " + "#" + hs2.value;
  }

  let text = document.getElementById('output').innerText;
  document.getElementById('output').innerText = gene;
}

function buttonClick() {
 var mstdnsvr = document.getElementById('mstdn_url');
 var dd = document.getElementById('date');
 var trnsp = document.getElementById('transport');
 var brnd = document.getElementById('brand');
 var nbrg = document.getElementById('numbering');
 var ln = document.getElementById('line');
 var ids = document.getElementById('ids');
 var fr = document.getElementById('for');
 var gton = document.getElementById('geton');
 var gtof = document.getElementById('getoff');
 var vhcl = document.getElementById('vehicle');
 var cmt = document.getElementById('comment');
 var hs1 = document.getElementById('hash1');
 var hs2 = document.getElementById('hash2');

 if (hs1.value === '') {
  var gene_url = mstdnsvr.value + "/share?text=" + dd.value + "%0a" + trnsp.value + "%20" + brnd.value + "%0a" + nbrg.value + "%20" + ln.value + "%0a" + ids.value + "%20" + "/" + "%20" + fr.value + "行" + "%0a" + gton.value + "%20" + "→" + "%20" + gtof.value + "%0a" + vhcl.value + "%0a" + cmt.value;
}else if (hs2.value === '') {
  var gene_url = mstdnsvr.value + "/share?text=" + dd.value + "%0a" + trnsp.value + "%20" + brnd.value + "%0a" + nbrg.value + "%20" + ln.value + "%0a" + ids.value + "%20" + "/" + "%20" + fr.value + "行" + "%0a" + gton.value + "%20" + "→" + "%20" + gtof.value + "%0a" + vhcl.value + "%0a" + cmt.value + "%0a" + "%23" + hs1.value;
}else{
  var gene_url = mstdnsvr.value + "/share?text=" + dd.value + "%0a" + trnsp.value + "%20" + brnd.value + "%0a" + nbrg.value + "%20" + ln.value + "%0a" + ids.value + "%20" + "/" + "%20" + fr.value + "行" + "%0a" + gton.value + "%20" + "→" + "%20" + gtof.value + "%0a" + vhcl.value + "%0a" + cmt.value + "%0a" + "%23" + hs1.value + "%20" + "%23" + hs2.value;
}

 const url = gene_url;
 window.open(url, '_blank')
}
