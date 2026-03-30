const urls = [
  "https://af822648e7.clvaw-cdnwnd.com/ebf04d199ab717981e71d4116475e828/200000003-7876378765/BOQPROAI.gif?ph=af822648e7",
  "https://af822648e7.clvaw-cdnwnd.com/ebf04d199ab717981e71d4116475e828/200000004-2516b2516d/Logo%20K-AQSPRO.gif?ph=af822648e7",
  "https://af822648e7.clvaw-cdnwnd.com/ebf04d199ab717981e71d4116475e828/200000005-53d3453d36/Logo%20K-SCEFR.gif?ph=af822648e7",
  "https://af822648e7.clvaw-cdnwnd.com/ebf04d199ab717981e71d4116475e828/200000006-744c6744c8/K-CHBCSELECT.gif?ph=af822648e7",
  "https://af822648e7.clvaw-cdnwnd.com/ebf04d199ab717981e71d4116475e828/200000000-8638386385/K-START-ENG_logo.gif?ph=af822648e7",
  "https://af822648e7.clvaw-cdnwnd.com/ebf04d199ab717981e71d4116475e828/200000007-281f7281f8/K-AIRCIMPROVE_logo.gif?ph=af822648e7",
  "https://af822648e7.clvaw-cdnwnd.com/ebf04d199ab717981e71d4116475e828/200000008-27e6527e67/K-DATAELECTANALYSE.gif?ph=af822648e7",
  "https://af822648e7.clvaw-cdnwnd.com/ebf04d199ab717981e71d4116475e828/200000009-7695a7695c/K-PVSIMPRO.gif?ph=af822648e7",
  "https://af822648e7.clvaw-cdnwnd.com/ebf04d199ab717981e71d4116475e828/200000001-72a3172a33/K-SIMSACE.gif?ph=af822648e7",
  "https://af822648e7.clvaw-cdnwnd.com/ebf04d199ab717981e71d4116475e828/200000010-3c4263c428/Logo%20-%20K-HOVENSIM.gif?ph=af822648e7",
  "https://af822648e7.clvaw-cdnwnd.com/ebf04d199ab717981e71d4116475e828/200000011-44a1244a14/Logo-3.gif?ph=af822648e7",
  "https://af822648e7.clvaw-cdnwnd.com/ebf04d199ab717981e71d4116475e828/200000012-78d9378d96/K-PMP.gif?ph=af822648e7",
  "https://af822648e7.clvaw-cdnwnd.com/ebf04d199ab717981e71d4116475e828/200000013-7caee7caf1/Logo-5.gif?ph=af822648e7",
  "https://af822648e7.clvaw-cdnwnd.com/ebf04d199ab717981e71d4116475e828/200000014-1e9b51e9b6/Logo-9.gif?ph=af822648e7",
  "https://af822648e7.clvaw-cdnwnd.com/ebf04d199ab717981e71d4116475e828/200000002-b26cdb26cf/logo.gif?ph=af822648e7",
  "https://af822648e7.clvaw-cdnwnd.com/ebf04d199ab717981e71d4116475e828/200000015-56b5f56b60/Logo-Costestimate.gif?ph=af822648e7",
  "https://af822648e7.clvaw-cdnwnd.com/ebf04d199ab717981e71d4116475e828/200000016-4d8304d831/Logo.jpeg?ph=af822648e7"
];

async function checkUrls() {
  for (const url of urls) {
    try {
      const res = await fetch(url);
      const buffer = await res.arrayBuffer();
      console.log(`Size: ${buffer.byteLength} bytes - ${url.split('/').pop()}`);
    } catch (e) {
      console.log(`Error: ${url} - ${e.message}`);
    }
  }
}

checkUrls();
