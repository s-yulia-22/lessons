


///////////////////////////////////////////////////

// 1)	Какое будет выведено значение: let x = 5; alert( x++ ); ?
            let x = 5; 
            alert( x++ );
            // ответ 5

            let x = 5; 
            alert( ++x );
            // ответ 6

// 2)	Чему равно такое выражение: [ ] + false - null + true ?
        //[ ] + false - null + true;
        console.log(typeof([] + false)); //пустой массив преобразуется в строку, получаем string 'false'

        console.log([] + false - null); // NaN

        console.log([] + false - null + true); // NaN

 // 3)	Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?

            let y = 1;
            let x = y = 2;
            alert(x);
            // ответ 2

// 4)	Чему равна сумма [ ] + 1 + 2?

            console.log([ ] + 1 + 2);
            // ответ 12

// 5)	Что выведет этот код: alert( "1"[0] )?
            alert( "1"[0] ); //1


 // 6)	Чему равно 2 && 1 && null && 0 && undefined ?

            console.log(2 && 1 && null && 0 && undefined); // && запинается на лжи

// 7)	Есть ли разница между выражениями? !!( a && b ) и (a && b)?

        console.log(!!( 1 && 2 ) === (1 && 2));


 // 8)	Что выведет этот код: alert( null || 2 && 3 || 4 ); ?

        alert( null || 2 && 3 || 4 ); // || запинается на правде (таблица приоритет операторов)

// 9)	a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
           const a = [1, 2, 3];
            const b = [1, 2, 3];
            console.log(a ==b);
            //no

// 10)	Что выведет этот код: alert( +"Infinity" ); ?
        console.log(typeof(+"Infinity" ) );

// 11)	Верно ли сравнение: "Ёжик" > "яблоко"?

        console.log("Ёжик" > "яблоко");
        // false Таблица символов Юникода

// 12)	Чему равно 0 || "" || 2 || undefined || true || falsе ?

console.log(0 || "" || 2 || undefined || true || falsе); //2