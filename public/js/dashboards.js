const barra = document.getElementById("barra").getContext("2d");

      const myChart = new Chart(barra, {
        type: "bar",
        data: {
          labels: [
            "Petit Gateu",
            "Gelato de Pistache",
            "Brownie Gigante",
            "Pequena Torta de maça",
            "Pudim de Leite",
          ],
          datasets: [
            {
              label: "Venda do último semestre",
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                // Cores de fundo para cada barra
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderColor: [
                // Cores da borda das barras
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: false,
          animation: {
            duration: 1000,
          },
          scales: {
            x: {
              beginAtZero: true,
            },
          },
        },
      });

      var ctx = document.getElementById("pizza").getContext("2d");
      var chartgraph = new Chart(ctx, {
        type: "pie",
        data: {
          labels: ["Camarão Siciliano", "Espaguete Coco Bambu", "Entradinha Camarão Crocante" , "Camarão Coco Brasil"],
          datasets: [
            {
              label: "Pratos mais escolhidos",
              data: [10, 20, 30, 12],
              borderWidth: 6,
              backgroundColor: [
                // Cores de fundo para cada barra
                "rgba(222, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",

              ],
            },
          ],
        },
        options: {
          responsive: false,
          maintainAspectRatio: false,
          animation: {
            duration: 2000,
          },
          scales: {
            x: {
              beginAtZero: true,
            },
          },
        },
      });