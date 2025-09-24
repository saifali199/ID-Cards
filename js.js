function generateQR() {
      let fname = document.getElementById("fname").value;
      let lname = document.getElementById("lname").value;
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;

      let qrData = `First Name: ${fname}\nLast Name: ${lname}\nEmail: ${email}\nPassword: ${password}`;
      
      document.getElementById("qrcode").innerHTML = ""; // Clear old QR
      new QRCode(document.getElementById("qrcode"), {
        text: qrData,
        width: 200,
        height: 200
      });
    }// Generate random iCloud email
    function generateEmail() {
      let chars = "abcdefghijklmnopqrstuvwxyz0123456789";
      let username = "";
      for (let i = 0; i < 8; i++) {
        username += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      let email = username + "@icloud.com";
      document.getElementById("email").value = email;
    }

    // Generate random password
    function generatePassword() {
      let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
      let pass = "";
      for (let i = 0; i < 10; i++) {
        pass += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      document.getElementById("password").value = pass;
    }

    // Generate QR code
    function generateQR() {
      let fname = document.getElementById("fname").value;
      let lname = document.getElementById("lname").value;
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;

      let qrData = `First Name: ${fname}\nLast Name: ${lname}\nEmail: ${email}\nPassword: ${password}`;
      
      document.getElementById("qrcode").innerHTML = ""; // Clear old QR
      new QRCode(document.getElementById("qrcode"), {
        text: qrData,
        width: 200,
        height: 200
      });
    }// Copy text function
    function copyText(fieldId) {
      let copyField = document.getElementById(fieldId);
      copyField.select();
      copyField.setSelectionRange(0, 99999); // for mobile
      navigator.clipboard.writeText(copyField.value);
      alert("Copied: " + copyField.value);
    }

    // Generate random iCloud email
    function generateEmail() {
      let chars = "abcdefghijklmnopqrstuvwxyz0123456789";
      let username = "";
      for (let i = 0; i < 8; i++) {
        username += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      let email = username + "@icloud.com";
      document.getElementById("email").value = email;
    }

    // Generate random password
    function generatePassword() {
      let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
      let pass = "";
      for (let i = 0; i < 10; i++) {
        pass += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      document.getElementById("password").value = pass;
    }

    // Generate QR code
    function generateQR() {
      let fname = document.getElementById("fname").value;
      let lname = document.getElementById("lname").value;
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;

      let qrData = `First Name: ${fname}\nLast Name: ${lname}\nEmail: ${email}\nPassword: ${password}`;
      
      document.getElementById("qrcode").innerHTML = ""; // Clear old QR
      new QRCode(document.getElementById("qrcode"), {
        text: qrData,
        width: 200,
        height: 200
      });
    }