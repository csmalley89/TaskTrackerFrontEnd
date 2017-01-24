"use strict";

app.factory("TaskFactory", (CashDrawerAPI, $q, $http) => {

  let getTaskList = () => {
    let tasks = [];
    return $q((resolve, reject) => {
      $http.get(`${CashDrawerAPI}bangazon`)
      .then((taskObject) => {
        resolve(taskObject.data);
      })
      .catch((error) => {
        reject(error);
      });
    });
  };

  let getSingleTask = (TaskId) => {
    return $q((resolve, reject) => {
      $http.get(`${CashDrawerAPI}bangazon/${TaskId}`)
      .then((taskObject) =>{
        resolve(taskObject.data);
      })
      .catch((error) => {
        reject(error);
      });
    });
  };

  let getTasksByStatus = (StatId) => {
    return $q((resolve, reject) => {
      $http.get(`${CashDrawerAPI}bangazon/stat/${StatId}`)
      .then((taskObject) =>{
        resolve(taskObject.data);
      })
      .catch((error) => {
        reject(error);
      });
    });
  };

  let postNewTask = (newTask) => {
    return $q( (resolve, reject) => {
      $http.post(`${CashDrawerAPI}bangazon`, JSON.stringify(newTask))
        .then((objFromDb) => {
          resolve(objFromDb);
          console.log("objFromDb in Factory", objFromDb);
        })
      .catch((error)=>{
        reject(error);
      });
    });
  };

  let updateTask = (TaskId, editedTask) => {
    return $q((resolve, reject) => {
      $http.put(`${CashDrawerAPI}bangazon/${TaskId}`, JSON.stringify(editedTask))
      .then((objFromDb) =>{
        resolve(objFromDb);
      })
      .catch((error)=>{
        reject(error);
      });
    });
  };

  let deleteTask = (TaskId) => {
    return $q((resolve, reject) => {
      $http.delete(`${CashDrawerAPI}bangazon/${TaskId}`)
      .then((objFromDb) => {
        resolve(objFromDb);
      });
    });
  };



  return{getTaskList, postNewTask, getTasksByStatus, deleteTask, getSingleTask, updateTask};
});
