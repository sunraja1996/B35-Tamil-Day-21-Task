let countdown = 10;

setTimeout(() => {
  document.querySelector(".countdown").innerText = --countdown;
  setTimeout(() => {
    document.querySelector(".countdown").innerText = --countdown;
    setTimeout(() => {
      document.querySelector(".countdown").innerText = --countdown;
      setTimeout(() => {
        document.querySelector(".countdown").innerText = --countdown;
        setTimeout(() => {
          document.querySelector(".countdown").innerText = --countdown;
          setTimeout(() => {
            document.querySelector(".countdown").innerText = --countdown;
            setTimeout(() => {
              document.querySelector(".countdown").innerText = --countdown;
              setTimeout(() => {
                document.querySelector(".countdown").innerText = --countdown;
                setTimeout(() => {
                  document.querySelector(".countdown").innerText = --countdown;
                  setTimeout(() => {
                    document.querySelector(".countdown").innerHTML = 
                    "Happy Independence Day";
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
