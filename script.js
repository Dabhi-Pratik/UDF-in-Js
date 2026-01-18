document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const gujarati = Number(document.getElementById("gujarati").value);
    const hindi = Number(document.getElementById("hindi").value);
    const english = Number(document.getElementById("english").value);
    const maths = Number(document.getElementById("maths").value);
    const sanskrit = Number(document.getElementById("sanskrit").value);

    showResult(gujarati, hindi, english, maths, sanskrit);
});

function showResult(gujarati, hindi, english, maths, sanskrit) {
    const total = totalMark(gujarati, hindi, english, maths, sanskrit);
    const percent = percentage(total);
    const grade = gradeCalculate(percent);

    document.getElementById("result").innerHTML = `
       <div class="r1"> <h3>Result</h3>
        <p><b>Total Marks:</b> ${total} / 500</p>
        <p><b>Percentage:</b> ${percent.toFixed(2)}%</p>
        <p><b>Grade:</b> ${grade}</p>
        </div>
    `;
}

function totalMark(gujarati, hindi, english, maths, sanskrit) {
    return gujarati + hindi + english + maths + sanskrit;
}

function percentage(total) {
    return (total / 500) * 100;
}

function gradeCalculate(percent) {
    if (percent >= 90) return "A+";
    else if (percent >= 80) return "A";
    else if (percent >= 70) return "B";
    else if (percent >= 60) return "C";
    else if (percent >= 50) return "D";
    else return "Fail";
}
