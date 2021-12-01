import React from "react";
import { RegisterBg } from "../../assets";
import "./detailblog.scss";

const DetailBlog = () => {
  return (
    <div className="detail-blog-wrapper">
      <img className="img-cover" src={RegisterBg} alt="thumb" />
      <p className="blog-title">Title Blog</p>
      <p className="blog-author">Author - Date Post</p>
      <p className="blog-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, modi aspernatur. Sequi quo accusantium, ab tenetur voluptatum eligendi dolorum, voluptate eaque error corporis ea aut ducimus cum libero consequuntur quas. Deleniti
        maxime molestias est soluta autem maiores impedit repellendus! At officia qui voluptatem temporibus doloribus similique voluptate laboriosam aliquam tempora necessitatibus omnis, quis, aperiam ullam optio nemo alias amet
        repellendus! Voluptates, delectus dolorem facere nostrum ipsam rem nisi deleniti nulla numquam voluptatibus ex nihil doloribus fuga provident veniam architecto enim veritatis? Sed, eos. Ratione voluptatem possimus ad odio dolorum
        iusto. Omnis iste quas non voluptatibus. Iure doloribus quis cupiditate laboriosam eligendi sit voluptatibus ducimus explicabo fugiat ad illum necessitatibus similique maiores quibusdam doloremque magni temporibus, culpa mollitia,
        est, soluta corporis. Est modi officiis facere, ducimus facilis possimus aliquam deleniti numquam, in illo, recusandae perspiciatis cumque temporibus excepturi dolorum ex! Perspiciatis neque, sit reiciendis repudiandae quisquam
        inventore. Eos aperiam sequi assumenda?
      </p>
    </div>
  );
};

export default DetailBlog;
