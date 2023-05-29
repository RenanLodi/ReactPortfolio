import React from 'react';
import '../../styles/portfolio.css';

export default function Portfolio() {
  return (
    <div>
     
      <div class='wrapper1' >
          <div class='container'>
            <a href="./images/02-portfolio-1.jpg">
              <img src="https://toppng.com/uploads/preview/code-text-programming-letters-symbols-11569818411fpnugmoo1n.jpg" alt='' />
              <div class="content">
                <h3>HTML</h3>
              </div>
            </a>
          </div>
          <div class="container">
            <a href="./images/02-portfolio-2.jpg">
              <img src='https://wallpaperaccess.com/full/3295120.png' alt="" />
              <div class="content">
                <h3>CSS</h3>
              </div>
            </a>
          </div>
          <div class="container">
            <a href="./images/02-portfolio-3.jpg">
              <img src="https://i.guim.co.uk/img/media/381d489e481bf51280498055c6fd4df872883a09/0_405_6016_3611/master/6016.jpg?width=1200&quality=85&auto=format&fit=max&s=e26b04ad91f3589ee551b1de62b250d2" alt="" />
              <div class="content">
                <h3>JAVASCRIPT</h3>
              </div>
            </a>
          </div>
          <div class="container" >
            <a href="./images/02-portfolio-4.jpg">
              <img src="https://previews.123rf.com/images/peshkov/peshkov1905/peshkov190500374/128578729-abstract-glowing-circuit-coding-background-programming-and-technology-concept-3d-rendering.jpg" alt="" />
              <div class="content">
                <h3>MERN</h3>
              </div>
            </a>
          </div>
          <div class="container" >
            <a href="./images/02-run-buddy.jpg">
              <img src="https://static.vecteezy.com/system/resources/previews/020/076/233/large_2x/hand-showing-sql-word-with-database-server-background-sql-commands-are-mainly-categorized-into-five-categories-as-ddl-dql-dml-dcl-tcl-concept-of-structured-query-language-code-3d-render-photo.jpg" alt="" />
              <div class="content">
                <h3>SQL</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
  )
}