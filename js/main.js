
    var todoList = [];
    /*if (localStorage.getItem('todo') != undefined) {
        todoList = JSON.parse(localStorage.getItem('todo'));
    }*/


    function save () {
        var inputText = document.getElementById('in').value;
        todoList.push(inputText);
        console.log(todoList);
        var i = out();
        console.log(i);
        document.getElementById("in").value = "";
        document.getElementById("output").innerHTML = i;
    }

    function out() {
        let outTask = '';
        for (let i = 0; i < todoList.length; i++) {
            outTask += '<div class="output">' + '<input type="checkbox">' + todoList[i] +'</div>';
        }
        return outTask;
    }

   