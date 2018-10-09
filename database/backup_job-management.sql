--
-- PostgreSQL database dump
--

-- Dumped from database version 10.5
-- Dumped by pg_dump version 10.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


--
-- Name: accounts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.accounts_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.accounts_id_seq OWNER TO postgres;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: accounts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.accounts (
    id bigint DEFAULT nextval('public.accounts_id_seq'::regclass) NOT NULL,
    email character varying(30) NOT NULL,
    password character varying(30) NOT NULL,
    role character varying(20) NOT NULL,
    full_name character varying(50),
    phone_number character varying(11),
    address character varying(100),
    avatar character varying(100),
    active boolean DEFAULT true,
    temporary boolean DEFAULT true,
    expire_at timestamp without time zone,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.accounts OWNER TO postgres;

--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_id_seq OWNER TO postgres;

--
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    id bigint DEFAULT nextval('public.products_id_seq'::regclass) NOT NULL,
    name character varying(50) NOT NULL,
    description character varying(500),
    image character varying(100),
    price bigint,
    quantity bigint,
    manufacturer character varying(100),
    category character varying(100),
    active boolean DEFAULT true,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.products OWNER TO postgres;

--
-- Data for Name: accounts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.accounts (id, email, password, role, full_name, phone_number, address, avatar, active, temporary, expire_at, created_at, updated_at) FROM stdin;
2	editor@localhost.com	password	editor	I am editor	123456789	\N	\N	t	t	\N	2018-09-23 00:24:50.21012	2018-09-23 00:24:50.21012
1	administrator@localhost.com	password	administrator	I am administrator	123456789	\N	\N	t	t	\N	2018-09-23 00:22:44.074191	2018-09-23 00:22:44.074191
3	viewer@localhost.com	password	viewer	I am viewer	123456789	\N	\N	t	t	\N	2018-09-23 00:24:50.21012	2018-09-23 00:24:50.21012
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products (id, name, description, image, price, quantity, manufacturer, category, active, created_at, updated_at) FROM stdin;
2	Iphone 8 plus 64G	Apple bất ngờ ra mắt bộ đôi iPhone 8 và iPhone 8 Plus tạo ra cơn bão mới càn quét hết các bảng xếp hạng siêu phẩm. Như thường lệ, iPhone 8 Plus từ thiết kế cho tới tính năng đều mang đến cho người dùng những trải nghiệm thú vị tuyệt vời không thể bỏ lỡ.	\N	23990000	15	APPLE	PHONE	t	2018-09-23 00:32:56.94006	2018-09-23 00:32:56.94006
3	Samsung Galaxy Note 9 128GB	Samsung Note 9 là chiếc điện thoại hoàn hảo nhất hiện nay với tất cả các tính năng đều xuất sắc và bút S pen thông minh hơn bao giờ hết.	\N	22990000	20	SAMSUNG	PHONE	t	2018-09-23 00:32:56.94006	2018-09-23 00:32:56.94006
1	Iphone X 64G	Đã lâu lắm rồi Apple mới ra mắt một sản phẩm với thiết kế đột phá và liều lĩnh. Dù vấp phải khá nhiều ý kiến trái chiều nhưng cũng không thể phủ nhận độ hấp dẫn của chiếc iPhone thế hệ thứ 10 này. Công nghệ bảo mật mới, loại bỏ nút home truyền thống, camera với những tính năng độc quyền, tất cả đã khiến người dùng đứng ngồi không yên cho đến khi được trên tay.	\N	25990000	10	APPLE	PHONE	t	2018-09-23 00:30:54.595797	2018-09-23 00:30:54.595797
\.


--
-- Name: accounts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.accounts_id_seq', 3, true);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_id_seq', 3, true);


--
-- Name: accounts accounts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT accounts_pkey PRIMARY KEY (id);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

