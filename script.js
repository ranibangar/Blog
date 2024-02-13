// //complete the addBlog function to add moveup, movedown and delete button. 
function addBlog(blog) {
      const blogList = document.querySelector('.blog-list');
      
        
      const newBox = document.createElement('div');
      newBox.classList.add('blog-box');

      const newBlogPost = document.createElement('div');
      newBlogPost.classList.add('blog-post');
        newBox.appendChild(newBlogPost);
        

      const newBlogHeader = document.createElement('div');
      newBlogHeader.classList.add('blog-header');
      newBlogPost.appendChild(newBlogHeader);

      const newBlogTitle = document.createElement('h2');
      newBlogTitle.classList.add('blog-title');
      newBlogTitle.textContent = blog.title;
      newBlogHeader.appendChild(newBlogTitle);

      const newBlogDate = document.createElement('p');
      newBlogDate.classList.add('blog-date');
      newBlogDate.textContent = blog.date;
      newBlogHeader.appendChild(newBlogDate);

      const newBlogContent = document.createElement('p');
      newBlogContent.classList.add('blog-content');
      newBlogContent.textContent = blog.content;
      newBlogPost.appendChild(newBlogContent);

    // create a new div with className blog-buttons and append it to newBox
    const button= document.createElement("div");
    button.classList.add("blog-buttons");
    newBox.appendChild(button);
    //Create moveup button with class blog-button and move-up
    const moveUp=document.createElement("button");
    moveUp.classList.add("blog-button","move-up");
    moveUp.textContent="move-up";
    button.appendChild(moveUp);

    //Add event listerner to moveup button
     moveUp.addEventListener("click",function(){
         
         const prevSibling = newBox.previousElementSibling;
        if (prevSibling) {
            blogList.insertBefore(newBox, prevSibling);
        }
     })
    //Create movedown button with class blog-button and move-down
    const moveDown=document.createElement("button");
    moveDown.classList.add("blog-button","move-down");
    moveDown.textContent="move-down";
    button.appendChild(moveDown);
    
    //Add event listerner to movedown button
    moveDown.addEventListener("click",function(){
        const nextSibling=newBox.nextElementSibling;
        if(nextSibling){
            blogList.insertBefore(nextSibling,newBox)
        }
    })

    //Create delete button with class blog-button and delete
    
    const deleteBtn=document.createElement("button");
    deleteBtn.classList.add("blog-button","delete");
    deleteBtn.textContent="delete";
    button.appendChild(deleteBtn);
    //Add event listerner to delete button
      deleteBtn.addEventListener("click",function(){
          newBox.remove();
      })
    
      blogList.appendChild(newBox);
    // Add event listeners to the buttons
}

const blogData = [
{
  title: 'First Blog Post',
  date: 'January 1, 2022',
  content: 'This is the content of the first blog post.'
},
{
  title: 'Second Blog Post',
  date: 'February 1, 2022',
  content: 'This is the content of the second blog post.'
},
{
  title: 'Third Blog Post',
  date: 'March 1, 2022',
  content: 'This is the content of the third blog post.'
}
];

blogData.forEach(blog => addBlog(blog)); 