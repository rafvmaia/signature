const form = document.querySelector('form');
const signatureDiv = document.querySelector('#signature');
const copyButton = document.querySelector('#copy_form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name').value;
    const role = document.querySelector('#role').value;
    const church = document.querySelector('#church').value;
    const phone = document.querySelector('#phone').value;
    const site = document.querySelector('#site').value;
    const image = document.querySelector('#image').files[0];
  
    const reader = new FileReader();
    reader.readAsDataURL(image);
  
    reader.onload = () => {
      const base64Image = reader.result;
  
      const htmlFormResult = `
      <div id="signature" class="signature">
      <div class="div-img">
        <img src="${base64Image}" style="width: 80px; padding: 0px;" />
      </div>
      <div class="content">
        <p class="name">${name}</p>
        <p>${role}</p>
        <p>${church}</p>
        <p>${phone}</p>
        <p>${site}</p>
      </div>
    </div>
    
      `;
      signatureDiv.innerHTML = htmlFormResult;
    };
  });
  

copyButton.addEventListener('click', () => {
    const range = document.createRange();
    range.selectNode(signatureDiv);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('Signature copied to clipboard!');
  });
