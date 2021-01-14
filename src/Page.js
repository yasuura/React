import React from 'react';

  /** ページネーションの設定を行う処理 */
  const pageNationStudent = () => {
    chankArray = students.filter((student, index) => {
      return (
        currentPageNum * perPage <= index &&
        index < perPage * currentPageNum + perPage
      );
    });
    setTotalPages(Math.ceil(students.length / 3));
    return chankArray;
  };
  const prevPageNation = () => {
    //前へボタン
    setCurrentPageNum(currentPageNum - 1);
  };
  const nextPageNation = () => {
    //次へボタン
    setCurrentPageNum(currentPageNum + 1);
  };

  // export default Page;