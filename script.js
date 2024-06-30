document.getElementById('wallet-address').addEventListener('click', function() {
    const walletAddress = this.textContent;
    navigator.clipboard.writeText(walletAddress).then(function() {
        const toast = document.getElementById('toast');
        toast.className = 'show';
        setTimeout(function() { toast.className = toast.className.replace('show', ''); }, 3000);
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
});