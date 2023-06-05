function run() {
     mostrar.onclick = crear;
}

function crear() {
     console.log(inputDesde.value);
     let desde = inputDesde.value;
     let hasta = inputHasta.value;

     createTable(desde, hasta)
}

function createTable(init, end) {
     
     
     for (let i = init; i <= end; i++) {
          document.write("<table>");
          document.write("<tbody>");
          document.write("<tr> <th>Tabla</th> <th>Mult</th> <th>Rs</th> </tr>");
          for (let j = 1; j <= 10; j++) {
               console.log("entro")
               document.write("<tr>");
               
               document.write("<td> " + i + " </td>");
               document.write("<td> " + j + " </td>");
               document.write("<td> " + i*j + " </td>");
               
               document.write("</tr>");
          }
          document.write("</tbody>");
          document.write("</table>");
     }

}

run();