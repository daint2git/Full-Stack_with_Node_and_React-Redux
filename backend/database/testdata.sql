PGDMP         	                 v            phone-store    10.5    10.5                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false                       1262    16393    phone-store    DATABASE     �   CREATE DATABASE "phone-store" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Vietnamese_Vietnam.1258' LC_CTYPE = 'Vietnamese_Vietnam.1258';
    DROP DATABASE "phone-store";
             postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
             postgres    false                       0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                  postgres    false    3                        3079    12924    plpgsql 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;
    DROP EXTENSION plpgsql;
                  false                       0    0    EXTENSION plpgsql    COMMENT     @   COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';
                       false    1            �            1259    16408    accounts    TABLE     �  CREATE TABLE public.accounts (
    id bigint NOT NULL,
    user_name character varying(50) NOT NULL,
    password character varying(50) NOT NULL,
    email character varying,
    full_name character varying,
    role character varying NOT NULL,
    active boolean DEFAULT true,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now()
);
    DROP TABLE public.accounts;
       public         postgres    false    3            �            1259    16411    accounts_id_seq    SEQUENCE     x   CREATE SEQUENCE public.accounts_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.accounts_id_seq;
       public       postgres    false    3    198                       0    0    accounts_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.accounts_id_seq OWNED BY public.accounts.id;
            public       postgres    false    199            �            1259    16396    phones    TABLE     S  CREATE TABLE public.phones (
    id bigint NOT NULL,
    name character varying(50),
    describe character varying,
    price bigint,
    quantity bigint,
    category character varying,
    active boolean DEFAULT true,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now()
);
    DROP TABLE public.phones;
       public         postgres    false    3            �            1259    16394    phones_id_seq    SEQUENCE     v   CREATE SEQUENCE public.phones_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.phones_id_seq;
       public       postgres    false    3    197                       0    0    phones_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.phones_id_seq OWNED BY public.phones.id;
            public       postgres    false    196            z
           2604    16413    accounts id    DEFAULT     j   ALTER TABLE ONLY public.accounts ALTER COLUMN id SET DEFAULT nextval('public.accounts_id_seq'::regclass);
 :   ALTER TABLE public.accounts ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    199    198            v
           2604    16399 	   phones id    DEFAULT     f   ALTER TABLE ONLY public.phones ALTER COLUMN id SET DEFAULT nextval('public.phones_id_seq'::regclass);
 8   ALTER TABLE public.phones ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    197    196    197            �
          0    16408    accounts 
   TABLE DATA               s   COPY public.accounts (id, user_name, password, email, full_name, role, active, created_at, updated_at) FROM stdin;
    public       postgres    false    198   u       �
          0    16396    phones 
   TABLE DATA               o   COPY public.phones (id, name, describe, price, quantity, category, active, created_at, updated_at) FROM stdin;
    public       postgres    false    197          	           0    0    accounts_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.accounts_id_seq', 3, true);
            public       postgres    false    199            
           0    0    phones_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.phones_id_seq', 4, true);
            public       postgres    false    196            �
           2606    16442    accounts accounts_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT accounts_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.accounts DROP CONSTRAINT accounts_pkey;
       public         postgres    false    198            
           2606    16407    phones phones_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.phones
    ADD CONSTRAINT phones_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.phones DROP CONSTRAINT phones_pkey;
       public         postgres    false    197            �
   �   x�3�LM�,�/�,H,..�/J��r�s2�K���s9��K+S�J���\]<C��8K8�-t,u��L,��LL̍���Hqr&��f�!�s�XQ�������H��Ɯe���H����X����J��1z\\\ ��go      �
   �  x��T�j�@]�_q?�1��4Rv�Sh����FV�GX��8�˒E]���QM)N�"�H�,���Oz���ZH3ss�3��W��e���'-c�E� ����"�a�`'I�DE~���A�P4��`Td3	�(�y���DPd7
���1�%B���O!��#v_Υh�}�Eُ�;�P�e��j%Au�_�Kq{)�����+��D�R��'Ƌ�B�[���{Ev.�Ǩ�m��6+'q�9X&H}:i�s�,��"���~�J&��E���E�+2"���p<A����~|/�!m%;._`}!��!����:(Ĭm6�
2%�{Y�� ��uU6g��R��D��IELa*�bR��'"1��Ið7]����4v���/eئ�l��i�em��v�ml5]��Z��+9�����tL��A����*x��`���θ���	R��T�ߦ���'�|}*�)=W$-��ש����p%��'�@��+k6`M��0�Q��_{���K4��ԏ�BF^9&�)�:wB��h#t�Q�茼�	�}�h2�=�SԩY�d���Y�5���ƸI���	�ƪ.X��zv�C�duS���]:^�$��A�Ee��&�����Y�x0���,|�@�.Q�m�lD	��C? '��ȋ]�b�Fg�M��nk3�P�}�V��_�(     