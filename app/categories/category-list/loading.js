import React from "react";
import "./a.css";
export default function Loading() {
  return (
    <div className="wrapperLoading">
      <div class="card">
        <div class="cover-image-skeleton"></div>
        {/* <div class="avatar-skeleton"></div> */}
        <div class="skeleton-loader"></div>
        <div class="skeleton-loader"></div>
        <div class="skeleton-loader"></div>
      </div>
    </div>
  );
}
