window.onload = function() {
    const period30s = document.getElementById('period30s');
    const timer30s = document.getElementById('timer30s');
    const resultsBody = document.getElementById('results-body');

    // Java Timer logic
    function updateTimerAndPeriod() {
        const now = new Date();
        const seconds = now.getUTCSeconds();
        const remainingSeconds = 30 - (seconds % 30);
        const minutes = now.getUTCMinutes();
        const totalMinutes = now.getUTCHours() * 60 + minutes;

        // Update period number
        const periodNumber = `20241103${totalMinutes * 2 + (seconds >= 30 ? 1 : 0)}`;
        period30s.innerText = periodNumber;

        // Update timer
        const formattedTime = `  ${String(0).padStart(2, ' ')}  :  ${String(remainingSeconds).padStart(2, ' ')}`;
        timer30s.innerText = formattedTime;

        // Show random result when the period number changes
        if (remainingSeconds === 30) {
            const randomResult = generateRandomResult();
            const newRow = `<tr><td>${periodNumber}</td><td>${randomResult}</td></tr>`;
            resultsBody.innerHTML += newRow;
        }
    }

    // Random result generator (SMALL/BIG alternating)
    let resultPattern = ['SMALL', 'SMALL', 'BIG', 'SMALL', 'BIG', 'SMALL', 'BIG', 'SMALL', 'BIG', 'SMALL', 'BIG', 'SMALL', 'BIG', 'SMALL', 'BIG', 'SMALL', 'BIG', 'SMALL', 'BIG', 'SMALL'];
    let currentIndex = 0;

    function generateRandomResult() {
        const result = resultPattern[currentIndex % resultPattern.length];
        currentIndex++;
        return result;
    }

    // Update every second
    setInterval(updateTimerAndPeriod, 1000);
};
