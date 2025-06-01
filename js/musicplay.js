// 获取音频元素
const audio = document.getElementById('background-audio');

// 监听 Enter 按钮的点击事件
const enterButton = document.getElementById('enter-btn');
if (enterButton) {
    enterButton.addEventListener('click', function(event) {
        event.preventDefault();  // 阻止默认的页面跳转
        
        // 在 localStorage 中设置一个标志，通知 Home.html 页面播放音乐
        localStorage.setItem('playMusic', 'true');

        // 跳转到 Home.html
        window.location.href = 'Home.html';
    });
}
