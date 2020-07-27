import React, {Component} from 'react';
import UIkit from "uikit";

export default class EditorMeta extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meta: {
                title: '',
                keywords: '',
                description: ''
            }
        }
    }

    componentDidMount() {
        this.getMeta(this.props.virtualDom);
    }

    componentDidUpdate(prevProps) {
        if (this.props.virtualDom !== prevProps.virtualDom) {
            this.getMeta(this.props.virtualDom);
        }
    }

    getMeta(virtualDom) {
        this.title = virtualDom.head.querySelector('title') || virtualDom.head.appendChild(virtualDom.createElement('title'));

        this.keywords = virtualDom.head.querySelector('meta[name="keywords"]');
        if (!this.keywords) {
            this.keywords = virtualDom.head.appendChild(virtualDom.createElement('meta'));
            this.keywords.setAttribute("name", "keywords");
            this.keywords.setAttribute("content", "");
        }

        this.description = virtualDom.head.querySelector('meta[name="description"]');
        if (!this.description) {
            this.description = virtualDom.head.appendChild(virtualDom.createElement('meta'));
            this.description.setAttribute("name", "description");
            this.description.setAttribute("content", "");
        }

        this.setState({
            meta: {
                title: this.title.innerHTML,
                keywords: this.keywords.getAttribute("content"),
                description: this.description.getAttribute("content"),
            }
        })
    }

    applyMeta() {
        this.title.innerHTML = this.state.meta.title;
        this.keywords.setAttribute("content", this.state.meta.keywords);
        this.description.setAttribute("content", this.state.meta.description);
    }

    onValueChange(e) {

        if (e.target.getAttribute("data-title")) {
            e.persist();
            this.setState(({meta}) => {
                const newMeta = {
                    ...meta,
                    title: e.target.value
                }

                return {
                    meta: newMeta
                }
            })
        } else if (e.target.getAttribute("data-key")) {
            e.persist();
            this.setState(({meta}) => {
                const newMeta = {
                    ...meta,
                    keywords: e.target.value
                }

                return {
                    meta: newMeta
                }
            })
        } else {
            e.persist();
            this.setState(({meta}) => {
                const newMeta = {
                    ...meta,
                    description: e.target.value
                }

                return {
                    meta: newMeta
                }
            })
        }

    }

    render() {

        const {modal,target} = this.props;
        const {title, keywords, description} = this.state.meta;

        return (
            <div id={target} uk-modal={modal.toString()}>
                <div className="uk-modal-dialog uk-modal-body">
                    <h5 className="uk-modal-title">Редактирование Meta-тэгов</h5>

                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Title</label>
                            <input
                                data-title
                                type="text"
                                className="form-control"
                                placeholder="Title"
                                value={title}
                                onChange={(e) => this.onValueChange(e)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Keywords</label>
                            <textarea
                                data-key
                                className="form-control"
                                rows="3"
                                value={keywords}
                                onChange={(e) => this.onValueChange(e)}></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Description</label>
                            <textarea
                                data-descr
                                className="form-control"
                                rows="3"
                                value={description}
                                onChange={(e) => this.onValueChange(e)}></textarea>
                        </div>
                    </form>
                    
                    <p className="uk-text-right">
                        <button className="btn btn-danger uk-modal-close uk-margin-small-right" type="button">Отменить</button>
                        <button className="btn btn-success uk-modal-close" type="button" onClick={() => {this.applyMeta()}}>Применить</button>
                    </p>
                </div>
            </div>
        )
    }
}