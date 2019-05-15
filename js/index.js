document.querySelector('.curr-convert').addEventListener('click', currConvert);
    
function currConvert(e) {
    e.preventDefault();
    const currFrom = document.querySelector('.converter input[name=curr-from]').value;
    const currTo = document.querySelector('.converter input[name=curr-to]').value;
    const currKey = currFrom + '_' + currTo;   
    fetch(`https://free.currencyconverterapi.com/api/v6/convert?q=${currKey}&compact=ultra&apiKey=8d6ed55b061c9e65bbc8`)
        .then( response => response.json() )
        .then( currency => {
           const rate = currency[currKey];
           const sourceAmount = document.querySelector('.converter input[name=curr-amount]').value;
           const convertedAmount = rate * sourceAmount;
           document.querySelector('.converter output[name=curr-converted]')
            .innerText = convertedAmount.toFixed(2);
        });
}

$(function() {
  $('.smooth').on('click', function(event) {
    const target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: target.offset().top
          },
          1000
        );
    }
  });
});