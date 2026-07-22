 
        const lines = [
            '<!DOCTYPE html>',
            '<html lang="en">',
            '<head>',
            '    <meta charset="UTF-8">',
            '    <meta name="viewport"',
            '      content="width=device-width">',
            '    <title>Portfolio</title>',
            '</head>',
            '<body>',
            '    <header>',
            '        <h1>Stephanie</h1>',
            '    </header>',
        ];

        const output = document.getElementById('code-output');
        let lineIndex = 0;
        let charIndex = 0;
        let typedLines = [];

        function type() {
            if (lineIndex < lines.length) {
                const currentLine = lines[lineIndex];
                if (charIndex <= currentLine.length) {
                    output.textContent = [...typedLines, currentLine.substring(0, charIndex)].join('\n');
                    charIndex++;
                    setTimeout(type, 50);
                } else {
                    typedLines.push(currentLine);
                    lineIndex++;
                    charIndex = 0;
                    setTimeout(type, 50);
                }
            } else {
                setTimeout(restart, 1500);
            }
        }

        function restart() {
            lineIndex = 0;
            charIndex = 0;
            typedLines = [];
            output.textContent = '';
            type();
        }

        type();
