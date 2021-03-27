let todayTasksEl = document.createElement('ol').className = 'today-tasks'
let hourTaskEl = document.createElement('li').className = 'hour-task'
let saveTaskEl = document.createElement('button').className = 'btn'

let time = moment().format('dddd, MMM Do YYYY');
let hour = moment().hour();
let taskInput = function insertTask(event) {
    event.preventDefault();
    hourTaskEl.textContent = taskInput.value;
    console.log(taskInput);
}
       
$('#currentDay').text(time)      
    
$.each($('textarea'), function () {
    if (this.id == hour) {
        $(this).removeClass('future past')
        $(this).addClass('present')
    } else if (this.id > hour) {
        $(this).removeClass('present past')
        $(this).addClass('future')
    } else if (this.id < hour) {
        $(this).removeClass('future present')
        $(this).addClass('past')
    }
})
$('button').click(function(){
    let time = $(this).attr('data-text')
    let task = $('textarea[id="' + time + '"]').val()
    localStorage.setItem(time, task)
}) 

storage();

function storage () {
$('textarea').each(function() {
    for (let i = 0; i < localStorage.length; i++) {
        if (this.id == localStorage.key(i)) {
            $('textarea[id="' + localStorage.key(i) + '"]').val(localStorage.getItem(localStorage.key(i)))      
        }
    }
    })}

        //make sure id corresponds times

   