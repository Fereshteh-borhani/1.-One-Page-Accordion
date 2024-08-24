import { useState } from "react"

import styles from "./Accordion.module.css"

function Accordion() {
    
    const items = [
        { id: 1, value:"one", tab:"fluent", tittle: "fluent language", description: "Today, choosing a training course is a very difficult task, because there are endless courses on the Internet that do not even pay attention to the smallest standards of a suitable training course. At we, we try to pave the way for your progress by complying with these standards and providing quality and complete courses. You can get the best result from it" },
        { id: 2, value:"two", tab:"Project", tittle: "Project oriented", description: "After learning the concepts, the thing that will make you understand and master is to do the project and practice. In all the we courses, a large number of exercises and advanced projects have been solved to give you a very detailed view of the program." },
        { id: 3, value:"three", tab:"Support", tittle: "Support", description: "At the beginning of programming, everyone faces a series of questions and uncertainties, both technical and non-technical. These questions may waste days and weeks of your time, but with a professional and supportive programmer by your side, these doubts will soon be removed and you will make faster progress, which is why we courses have permanent support. We want to be with you in all stages of learning, hiring and after hiring." },
        { id: 4, value:"four", tab:"Update", tittle: "Update", description: "Scientific programming is progressing and we have tried to keep the courses updated so that the latest version of each technology is covered in the courses so that you always stay on the edge of technology." },
        { id: 5, value:"five", tab:"webinars", tittle: "Weekly webinars", description: "The path of learning has many ups and downs, we are together on this path and we gather together by holding weekly webinars and talk about problems and challenges and find solutions for them. Experience has proven that weekly webinars have a great impact on students' motivation and energy to continue learning." }
    ];


    const [isOption, setIsOption] = useState("");

  
    const changeHandler = (event) => {
        setIsOption(event.target.value);
        console.log(isOption);
    }

    return (
        <> 
            <h1 className={styles.title}>Good Training Features</h1>
            <div className={styles.tabs}>
                {items.map(item => (
                    <>
                        <input
                            key={item.id}
                            className={styles.tabInput}
                            type="radio" name="tabs"
                            id={item.value}
                            value={item.value}
                            checked={true}
                            onChange={changeHandler}
                            ></input>
                        
                        <label className={styles.tabLabel} htmlFor={item.value} value={item.value}>
                            { item.tab }
                        </label>

                        <div className={styles.tab}>
                            <h2>{ item.tittle }</h2>
                            <p>{ item.description }</p>
                        </div>
                    </>
                ))}      
            </div>
      </>
      
  )
}

export default Accordion