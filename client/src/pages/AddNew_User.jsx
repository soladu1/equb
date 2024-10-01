import React from "react";

export const Adduser = () => {
  return (
    <>
      <div className="py-4 px-3 px-md-4">
            <div className="card mb-3 mb-md-4">

                <div className="card-body">
                    {/* <!-- Breadcrumb --> */}
                    <nav className="d-none d-md-block" aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="#">አባል</a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">አዲስ አባል</li>
                        </ol>
                    </nav>
                    {/* <!-- End Breadcrumb --> */}

                    <div className="mb-3 mb-md-4 d-flex justify-content-between">
                        <div className="h3 mb-0">አዲስ አባል መዝግብ</div>
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
                                    <input type="number" className="form-control"  id="phone" name="email" placeholder="ስልክ"/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-12">
                                    <div className="font-weight-semi-bold h5 mb-3">ተጨማሪ መረጃ ስለ አባሉ</div>
                                </div>
                                <div className="form-group col-12 col-md-4">
                                    <label for="working_place">የስራቦታ</label>
                                    <input type="text" className="form-control"  id="working_place" name="working_place" placeholder="የስራ ቦታ"/>
                                </div>
                                <div className="form-group col-12 col-md-4">
                                    <label for="text">ጾታ</label>
                                    <input type="text" className="form-control"  id="gender" name="gender" placeholder="ጾታ"/>
                                </div>
                                <div className="form-group col-12 col-md-4">
                                    <label for="text">የገባበት ቀን</label>
                                    <input type="date" className="form-control"  id="gender" name="gender" placeholder="ጾታ"/>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary float-right">ቀይር</button>
                        </form>
                    </div>
                    {/* <!-- End Form --> */}
                </div>
            </div>


        </div>
    </>
  );
};
