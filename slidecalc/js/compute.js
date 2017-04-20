 function computeTime()
        {
            //Obtain user inputs
            var height=Number(document.getElementById("height").value);
            var resolution=Number(document.getElementById("resolution").value);
            var width=Number(document.getElementById("width").value);
            var rois=Number(document.getElementById("rois").value);
            var slices=Number(document.getElementById("slices").value);
            var slides=Number(document.getElementById("slides").value);
            var stripwidth = 5;
            var frequency = 100;


            //Perform calculation
            var Time=((width / stripwidth)*((height*1000)/resolution)/frequency);

            //Display result of calculation
            document.getElementById("output").innerText=Math.round((Time*rois*slices*slides)/60);

                }

      function resetFields() {
  var x = document.querySelectorAll(".resettable");
  x.forEach(el => {
    var y = el.getAttribute('value');
    el.value=y;
    el.innerHTML=y;
  })
}