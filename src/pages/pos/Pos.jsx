import { useFormik } from "formik";
import React, { useState } from "react";
import styles from "../../assets/styles/pos/Pos.module.css";

import * as Yup from "yup";
import axios from "axios";

const validationSchema = Yup.object({
  name: Yup.string().required("Ad boş ola bilməz"),
  price: Yup.string().required("Qiymət boş ola bilməz"),
});

const Pos = () => {
  const [names, setNames] = useState();

  const formik = useFormik({
    initialValues: {
      category: "",
      price: "",
      img: "",
    },
    onSubmit: async (values) => {
      const postData = async () => {
        try {
          const response = await axios.post(
            "https://book-db-shakhmurad.vercel.app/posts-midas",
            {
              category: values.category,
              price: values.price,
              img: names,
              id: values.id,
            }
          );
          console.log(response.data);
          return response;
        } catch (error) {
          console.error("Axios Error:", error);
        }
      };
      postData();
    },
    validationSchema: validationSchema,
  });

  const imageNames = [
    "image1",
    "image2",
    "image3",
    "image4",
    "image5",
    "image6",
    "image7",
  ];

  return (
    <div className={styles.pos}>
      <h1 className={styles.title}>Yeni yemək əlavə et</h1>
      <div className={styles.container}>
        <form onSubmit={formik.handleSubmit} className={styles.form}>
          <div className={styles.form_group}>
            {formik.touched.name && formik.errors.name ? (
              <div className={styles.error}>{formik.errors.name}</div>
            ) : null}
            <label htmlFor="firstName">Yemək adı</label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </div>
          <div className={styles.form_group}>
            {formik.touched.name && formik.errors.price ? (
              <div className={styles.error}>{formik.errors.name}</div>
            ) : null}
            <label htmlFor="lastName">Qiymət</label>
            <input
              id="price"
              name="price"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.price}
            />
          </div>
          <div className={styles.form_group}>
            {formik.touched.name && formik.errors.img ? (
              <div className={styles.error}>{formik.errors.name}</div>
            ) : null}
            <label htmlFor="email">Şəkil</label>
            <input
              id="img"
              name="img"
              type="text"
              onChange={formik.handleChange}
              value={names}
            />
          </div>
          <button className={styles.btn} type="submit">
            Əlavə et
          </button>
        </form>
        <div className={styles.images}>
          <img
            src="/img/image1.png"
            onClick={() => setNames(imageNames[0])}
            alt=""
            className={styles.img}
          />
          <img
            src="/img/image2.png"
            onClick={() => setNames(imageNames[1])}
            alt=""
            className={styles.img}
          />
          <img
            src="/img/image3.png"
            onClick={() => setNames(imageNames[2])}
            alt=""
            className={styles.img}
          />
          <img
            src="/img/image4.png"
            onClick={() => setNames(imageNames[3])}
            alt=""
            className={styles.img}
          />
          <img
            src="/img/image5.png"
            onClick={() => setNames(imageNames[4])}
            alt=""
            className={styles.img}
          />
          <img
            src="/img/image6.png"
            onClick={() => setNames(imageNames[5])}
            alt=""
            className={styles.img}
          />
          <img
            src="/img/image7.png"
            onClick={() => setNames(imageNames[6])}
            alt=""
            className={styles.img}
          />
        </div>
      </div>
    </div>
  );
};

export default Pos;
