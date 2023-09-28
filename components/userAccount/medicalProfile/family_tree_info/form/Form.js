import classes from "./Form.module.css";
const Form = (props) => {
    return (
        <div className={classes.section}>
            {props.formFor === "edit" ? (
                <p className="text-3xl py-6"> تعديل بيانات الام</p>
            ) : (
                <p className="text-3xl py-6">اضافه ابن</p>
            )}

            <form action="" className={classes.form}>
                <div>
                    <label htmlFor="n1">الاسم</label>
                    <input type="text" id="n1" />
                </div>
                <div>
                    <label htmlFor="n2">الكود</label>
                    <input type="text" id="n2" />
                </div>
                <div>
                    <label htmlFor="n3">العمر</label>
                    <input type="number" id="n3" />
                </div>
                <div>
                    <label htmlFor="n4">الطول</label>
                    <input type="number" id="n4" />
                </div>
                <div>
                    <label htmlFor="n5">الوزن</label>
                    <input type="number" id="n5" />
                </div>
                <div>
                    <label htmlFor="n6">الوظيفه</label>
                    <input type="text" id="n6" />
                </div>
                <div>
                    <label htmlFor="n7">فصيله الدم</label>
                    <select name="" id="n7">
                        <option value="">o</option>
                        <option value="">o</option>
                        <option value="">o</option>
                        <option value="">o</option>
                        <option value="">o</option>
                    </select>
                </div>
            </form>
            <button className={classes.confirm} onClick={()=>{
                props.onConfirm();
            }}>تاكيد البيانات</button>
        </div>
    );
};

export default Form;
