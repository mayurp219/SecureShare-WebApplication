let storedFile = null;
let generatedOtp = null;

function generateOtp() {
    return Math.floor(100000 + Math.random()*900000).toString();
}

function sendFile() {
    const fileInput = document.getElementById('fileInput');
    if (fileInput.files.length === 0) {
        alert('Please select a file.');
        return;
    }
    storedFile = fileInput.files[0];
    generatedOtp = generateOtp();
    document.getElementById('otpDisplay').innerText = `Your OTP is: ${generatedOtp}`;
    alert('File uploaded. Share the OTP with the receiver.');
}

function receiveFile() {
    const otpInput = document.getElementById('otpInput').value;
    if (otpInput === generatedOtp) {
        const url = URL.createObjectURL(storedFile);
        const downloadLink = document.getElementById('downloadLink');
        downloadLink.href = url;
        downloadLink.download = storedFile.name;
        downloadLink.style.display = 'block';
    } else {
        alert('Incorrect OTP. Please try again.');
    }
}
