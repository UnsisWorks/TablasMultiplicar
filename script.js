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
     document.write("<table>");
     document.write("<tbody>");


     document.write("<tr> <th>Tabla</th> <th>Mult</th> <th>Rs</th> </tr>");

     for (let i = init; i < end; i++) {
          const element = array[i];
          document.write("<tr>");
          document.write("<td> fref </td>");
          document.write("</tr>");
          document.write("<td>");
          document.write("</tr>");
          
     }

     document.write("</tbody>");
     document.write("</table>");
}

run();