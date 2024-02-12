var field = document.getElementById('field');
var ball = document.createElement('div');
ball.id = 'ball';
field.appendChild(ball);

field.addEventListener('click', function(event) {
  var fieldRect = field.getBoundingClientRect();
  var ballRect = ball.getBoundingClientRect();

  var mouseX = event.clientX - fieldRect.left;
  var mouseY = event.clientY - fieldRect.top;

  var ballX = mouseX - ballRect.width / 2;
  var ballY = mouseY - ballRect.height / 2;

  // Проверяем, чтобы мяч не выходил за границы поля
  if (ballX < 0) {
    ballX = 0;
  } else if (ballX + ballRect.width > fieldRect.width) {
    ballX = fieldRect.width - ballRect.width;
  }

  if (ballY < 0) {
    ballY = 0;
  } else if (ballY + ballRect.height > fieldRect.height) {
    ballY = fieldRect.height - ballRect.height;
  }

  ball.style.transform = 'translate(' + ballX + 'px, ' + ballY + 'px)';
});
