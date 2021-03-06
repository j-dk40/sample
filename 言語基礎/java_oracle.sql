CREATE USER JAVA_FUNDAMENTAL IDENTIFIED BY "atelier";

GRANT UNLIMITED TABLESPACE TO JAVA_FUNDAMENTAL;

GRANT CREATE SESSION TO JAVA_FUNDAMENTAL;

CREATE TABLE JAVA_FUNDAMENTAL.JAVA_FUNDAMENTAL(
  "MAIN_CD" VARCHAR2(10 BYTE) NOT NULL ENABLE,
  "COLUMN_A" VARCHAR2(100 BYTE) NOT NULL ENABLE,
  "COLUMN_B" NUMBER(5, 0),
  "COLUMN_C" TIMESTAMP
);

COMMENT ON COLUMN "JAVA_FUNDAMENTAL"."JAVA_FUNDAMENTAL"."MAIN_CD" IS 'メインコード';
COMMENT ON COLUMN "JAVA_FUNDAMENTAL"."JAVA_FUNDAMENTAL"."COLUMN_A" IS 'カラムA';
COMMENT ON COLUMN "JAVA_FUNDAMENTAL"."JAVA_FUNDAMENTAL"."COLUMN_B" IS 'カラムB';
COMMENT ON COLUMN "JAVA_FUNDAMENTAL"."JAVA_FUNDAMENTAL"."COLUMN_C" IS 'カラムC';

CREATE TABLE JAVA_FUNDAMENTAL.JAVA_FUNDAMENTAL_WORK(
  "MAIN_CD" VARCHAR2(10 BYTE) NOT NULL ENABLE,
  "COLUMN_A" VARCHAR2(100 BYTE) NOT NULL ENABLE,
  "COLUMN_B" NUMBER(5, 0),
  "COLUMN_C" TIMESTAMP
);

COMMENT ON COLUMN "JAVA_FUNDAMENTAL"."JAVA_FUNDAMENTAL_WORK"."MAIN_CD" IS 'メインコード';
COMMENT ON COLUMN "JAVA_FUNDAMENTAL"."JAVA_FUNDAMENTAL_WORK"."COLUMN_A" IS 'カラムA';
COMMENT ON COLUMN "JAVA_FUNDAMENTAL"."JAVA_FUNDAMENTAL_WORK"."COLUMN_B" IS 'カラムB';
COMMENT ON COLUMN "JAVA_FUNDAMENTAL"."JAVA_FUNDAMENTAL_WORK"."COLUMN_C" IS 'カラムC';