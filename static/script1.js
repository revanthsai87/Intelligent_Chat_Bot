var _typingIndicator = document.querySelector('.typing'),
    _input = document.querySelector('#chat-input'),
    _ip=document.querySelector('#chat-submit'),
    idleTime = 400,
    idleTimer = null,
    inputValue,
    indicatorState = {
        active : 'is-typing-active',
        init : 'is-typing-init'
    };

function showIndicator(){
    _typingIndicator.classList.add(indicatorState.init);
}

function activateIndicator(el){
    _typingIndicator.classList.add(indicatorState.active);
    inputValue = el.value;
    detectIdle(el);
}

function removeIndicator(){
    _typingIndicator.classList.remove(indicatorState.init, indicatorState.active);
}

function detectIdle(el){
    if (idleTimer) {
        clearInterval(idleTimer);
    }
    
    idleTimer = setTimeout(function(){
        if (getInputCurrentValue(el) === inputValue) {
            _typingIndicator.classList.remove(indicatorState.active);
        }
    }, idleTime);
}

function getInputCurrentValue(el){
    var currentValue = el.value;
    return currentValue;
}

function initTypingIndicator() {
    _input.onfocus = function(){
        showIndicator();
    };

    _input.onkeyup = function() {
        activateIndicator(this);
    };
    _input.onblur = function(){
        removeIndicator();
    };

    _ip.onclick  = function(){
        removeIndicator();
    };
}

initTypingIndicator();