import { firebaseApp } from "./firebase";
import firebase from "firebase";

const addStudentTofirebase = async(name,age)=>{
    const db = firebaseApp.firestore();
    const studentCollection = db.collection("students");
    console.log(studentCollection);
    // 新しいドキュメントの発行
    const newStudentDocRef = studentCollection.doc();
    // 発行したドキュメントに対してデータをセットする
    await newStudentDocRef.set({
      name: studentName,
      age: 18,
      createdAt: firebase.firestore.FieldValue.serverTimestamp() /*データ追加時の日付を取得する */
    });
    setStudents([...students, { id: newStudentDocRef.id, name: studentName }]);
    setStudentName("");
  };

  export default addStudentTofirebase;