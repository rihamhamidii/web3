
        let students = []; // قائمة الطلاب
        function addStudent(students, id, name, status) {
            try {
                if (students.some(student => student.id === id)) {
                    throw new Error('معرف الطالب موجود بالفعل.');
                }
                if (status !== 'مسجل' && status !== 'غير مسجل') {
                    throw new Error('حالة التسجيل غير صحيحة.');
                }
                students.push({ id, name, status });
                document.write('تم إضافة الطالب بنجاح.' +'<br>');
            } 


            catch (error) {
                document.error('خطأ: ' + error.message  +'<br>');
            }
        }
        function removeStudent(students, id) {
            try {
                const index = students.findIndex(student => student.id === id);
                if (index === -1) {
                    throw new Error('لم يتم العثور على الطالب.');
                }
                students.splice(index, 1);
                document.write('تم حذف الطالب بنجاح.' +'<br>');
            } catch (error) {
              document.error('خطأ: ' + error.message  +'<br>');
            }
        }
        function printStudents(students) {
            try {
                if (students.length === 0) {
                throw new Error('لا توجد بيانات لعرضها.');
                }
                document.write('قائمة الطلاب:'  +'<br>');
                students.forEach(student => {
                    document.write(`ID: ${student.id}, Name: ${student.name}, Status: ${student.status}` +'<br>');
                });
            } catch (error) {
                document.error('خطأ: ' + error.message  +'<br>');
            }
        }
        addStudent(students , 1, 'نور', 'مسجل');
        addStudent(students, 2, 'هدى', 'غير مسجل');
        printStudents(students);
        removeStudent(students, 1);






        