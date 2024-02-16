import {useCallback, useEffect, useState} from "react";
import {ApiPages, Page} from "../../types";
import {Link, useLocation} from "react-router-dom";
import axiosApi from "../../axiosApi";

const Fetch = () => {

    const location = useLocation();

    const [pages, setPages] = useState<Page[]>([]);


    const fetchPlay = useCallback( async () => {
            const {data: play} = await axiosApi.get<ApiPages | null>('/pages/play.json');
            if (!play){
                setPages([])
            } else {
                setPages(Object.keys(play).map(id => ({
                    ...play[id],
                    id: play
                })));
            }
    }, []);

    const fetchAbout = useCallback( async () => {
            const {data: about} = await axiosApi.get<ApiPages | null>('/pages/about.json');
            if (!about){
                setPages([])
            } else {
                setPages(Object.keys(about).map(id => ({
                    ...about[id],
                    id: about
                })))
            }
    }, []);

    const fetchContacts = useCallback( async () => {
            const {data: contact} = await axiosApi.get<ApiPages | null>('/pages/contacts.json');
            if (!contact){
                setPages([])
            } else {
                setPages(Object.keys(contact).map(id => ({
                    ...contact[id],
                    id: contact
                })));
            }
    }, []);

    const fetchBlog = useCallback( async () => {
        const {data: blog} = await axiosApi.get<ApiPages | null>('/pages/blog.json');
        if (!blog){
            setPages([])
        } else {
            setPages(Object.keys(blog).map(id => ({
                ...blog[id],
                id: blog
            })));
        }
    }, []);

    const fetchClass = useCallback( async () => {
        const {data: classes} = await axiosApi.get<ApiPages | null>('/pages/class.json');
        if (!classes){
            setPages([])
        } else {
            setPages(Object.keys(classes).map(id => ({
                ...classes[id],
                id: classes
            })));
        }
    }, []);

    useEffect( () => {
        if (location.pathname === '/blog'){
            void fetchBlog()
        } else if (location.pathname === '/about') {
            void fetchAbout()
        } else if (location.pathname === '/contacts'){
            void fetchContacts()
        } else if (location.pathname === '/play'){
            void fetchPlay()
        } else if (location.pathname === '/class'){
            void fetchClass()
        }
    }, [location.pathname, fetchBlog, fetchAbout, fetchContacts, fetchPlay, fetchClass]);

    return (
        <>
            {pages.map(content => (
                <div key={content[1]} className="container-fluid card mb-3">
                    <div className="text-lg-start card-body">
                        <p>{content.id.title}</p>
                        <p>{content.id.content}</p>
                        <Link to={'/admin/' + content.id.content} className="btn btn-success">Edit</Link>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Fetch;