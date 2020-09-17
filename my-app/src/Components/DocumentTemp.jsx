import React, { Component } from "react";
import axios from "axios";
export default class DocumentTemp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TempData: this.props.TempData,
      show: false,
      ObjId: "",
      docno: "",
      link: "",
      data: this.props.data,
    };
  }

  handleDoc = (id) => {
    let token = this.state.data[0].data.User.access_token;

    axios({
      method: "post",
      headers: {
        AccessToken: token,
        "Content-Type": "application/json",
      },
      url:
        "https://cors-anywhere.herokuapp.com/https://api.revvsales.com/api/docs",
      data: {
        template_id: id,
      },
    })
      .then((data) =>
        this.setState({
          objId: data.data.Document.object_id,
          show: true,
        })
      )
      .then(this.handlePermaLink)
      .catch((error) => alert(error));
  };
  handlePermaLink = () => {
    let token = this.props.data[0].data.User.access_token;
    console.log(this.state.objId, "obj");

    axios(
      "https://cors-anywhere.herokuapp.com/https://api.revvsales.com/api/folders/?page_num=1&sort_by_doc_num=true",
      {
        method: "get",
        headers: {
          AccessToken: token,
          "Content-Type": "application/json",
        },
      }
    )
      .then((data) =>
        this.setState({
          docno: data.data.page.inodes[1].doc_no,
          link: `https://ft890220.revvsales.com/documents/${data.data.page.inodes[1].doc_no}`,
        })
      )
      .catch((error) => alert(error))
      .then((data) => {
        //console.log(this.state.docno, "docno");
        if (this.state.docno != "") {
          //  console.log("yes", this.state.docno, this.state.link);
          window.open(this.state.link);
        }
      });
  };
  render() {
    console.log(
      this.props.TempData,
      this.state.docno,
      this.state.link,
      this.props.TempData
    );

    return (
      <>
        {this.props.TempData.length > 0 ? (
          <div className='DocsContainer'>
            {this.props.TempData[0].data.Templates.map((a) => (
              <div >
                <div>
                  <img
                    src={a.thumbnail}
                    id={a.id}
                    onClick={() => this.handleDoc(a.id)}
                    style={{ height: "95%", width: "150px" }}
                  />
                  <div>{a.title}</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
      </>
    );
  }
}
