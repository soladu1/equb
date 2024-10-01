import React from "react";

export const Setting = () => {
  return (
    <>
      <div className="py-4 px-3 px-md-4">
            <div className="card mb-3 mb-md-4">

                <div className="card-body">
                    {/* <!-- Breadcrumb --> */}
                    <nav className="d-none d-md-block" aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="#">የግል መረጃ</a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">የግል መረጃ ለመቀየር</li>
                        </ol>
                    </nav>
                    {/* <!-- End Breadcrumb --> */}

                    <div className="mb-3 mb-md-4 d-flex justify-content-between">
                        <div className="h3 mb-0">የግል መረጃ ለመቀየር</div>
                    </div>


                    {/* <!-- Form --> */}
                    <div>
                        <form>
                            <div className="form-row">
                                <div className="form-group col-12 col-md-6">
                                    <label for="name">ስም</label>
                                    <input type="text" className="form-control"  id="name" name="name" placeholder="ስም"/>
                                </div>
                                <div className="form-group col-12 col-md-6">
                                    <label for="phone">ስልክ</label>
                                    <input type="number" className="form-control"  id="phone" name="phone" placeholder="ስልክ"/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-12">
                                    <div className="font-weight-semi-bold h5 mb-3">የይለፍ ቃል ለመቀየር</div>
                                </div>
                                <div className="form-group col-12 col-md-4">
                                    <label for="old_password">የድሮ የይለፍቃል</label>
                                    <input type="password" className="form-control"  id="old_password" name="old_password" placeholder="Current Password"/>
                                </div>
                                <div className="form-group col-12 col-md-4">
                                    <label for="password">አዲስ የይለፍቃል</label>
                                    <input type="password" className="form-control"  id="password" name="password" placeholder="New Password"/>
                                </div>
                                <div className="form-group col-12 col-md-4">
                                    <label for="password_confirm">በድጋሚ ያረጋግጡ</label>
                                    <input type="password" className="form-control"  id="password_confirm" name="password_confirm" placeholder="Repeat New Password"/>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary float-right">ይቀይሩ</button>
                        </form>
                    </div>
                    {/* <!-- End Form --> */}
                </div>
            </div>


        </div>
    </>
  );
};
