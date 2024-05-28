import inquirer from "inquirer";

let todo_list: string[] = [];

let while_condition: boolean = true;

while (while_condition === true) {
  // --------------------------------------------options-----------------------------------

  let option = await inquirer.prompt([
    {
      type: "list",
      name: "user_option",
      message: "select an option",
      choices: ["Add", "Edit","Remove"],
    },
  ]);

  // --------------------------------------------Add-----------------------------------

  if (option.user_option === "Add") {
    let ans = await inquirer.prompt({
        type: "input",
        name: "user_ans",
        message: "write something to add in the task list.",
      })
     if(ans.user_ans !== " "){
      todo_list.push(ans.user_ans);
      console.log(todo_list)
     }else {
      console.log("Please write something to add in todo list")
     }
  }
   
  //--------------------------------------Edit--------------------------------
 else if(option.user_option === "Edit"){
  let edit_value = await inquirer.prompt([{
    type:"list",
    name:"edit_item",
    message:"Edit item in todo list",
    choices:todo_list,
  }]);
  let edition = await inquirer.prompt([{
    type:"list",
    name:"edit_text",
    message:"which item you add instead of these item?",
    choices:todo_list
  }])
  let index_to_edit = todo_list.indexOf(edit_value.edit_item);
  if (index_to_edit >= 0){
    todo_list.splice(index_to_edit, 1, edition.edit_text)
    console.log(todo_list)
 }
 }
 
  //--------------------------------------Remove--------------------------------
  else if(option.user_option === "Remove"){
    let remove_choice = await inquirer.prompt([{
      type:"list",
      name:"remove_item",
      message:"select item to remove",
      choices: todo_list,
    }]);
    let index_to_remove = todo_list.indexOf(remove_choice.remove_item);
    if (index_to_remove >= 0){
      todo_list.splice(index_to_remove, 1);
      console.log(todo_list)
    }
  }
//-----------------------------------------confirmation-----------------------------------------
let user_ans = await inquirer.prompt([{
  type:"confirm",
  name:"selection",
  message:"Do you want to continue?",
  default:true
}])
if(user_ans.selection === false){
  while_condition =false;
}
}
