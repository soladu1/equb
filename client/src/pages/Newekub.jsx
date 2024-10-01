import React from "react";

export const Newekub = () => {
  return (
    <>
      <div className="py-4 px-3 px-md-4">
            <div className="card mb-3 mb-md-4">

                <div className="card-body">
                    {/* <!-- Breadcrumb --> */}
                    <nav className="d-none d-md-block" aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="#">እቁብ</a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">አዲስ እቁብ መዝግብ</li>
                        </ol>
                    </nav>
                    {/* <!-- End Breadcrumb --> */}

                    <div className="mb-3 mb-md-4 d-flex justify-content-between">
                        <div className="h3 mb-0">አዲስ እቁብ መዝግብ</div>
                    </div>


                    {/* <!-- Form --> */}
                    <div>
                        <form>
                            <div className="form-row">
                                <div className="form-group col-12 col-md-6">
                                    <label for="name">የእቁብ ማጠን</label>
                                    <input type="number" className="form-control"  id="name" name="name" placeholder="የእቁብ መጠን"/>
                                </div>
                                {/* <div className="form-group col-12 col-md-6">
                                    <label for="phone">ስልክ</label>
                                    <input type="number" className="form-control"  id="phone" name="email" placeholder="ስልክ"/>
                                </div> */}
                            </div>
                            <div className="form-row">
                                <div className="col-12">
                                    <div className="font-weight-semi-bold h5 mb-3">ተጨማሪ መረጃ ስለ እቁቡ</div>
                                </div>
                                <div className="form-group col-12 col-md-4">
                                    <label for="starting">የተጀመረበት ቀን</label>
                                    <input type="date" className="form-control"  id="starting" name="starting" placeholder="የስራ ቦታ"/>
                                </div>
                                <div className="form-group col-12 col-md-4">
                                    <label for="ending">የሚያበቃበት ቀን</label>
                                    <input type="date" className="form-control"  id="ending" name="ending" placeholder="ጾታ"/>
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
