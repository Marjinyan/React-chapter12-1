import styles from './style.js'
const FormBlock = () => {
    return <form style={styles.form}>
        <div style={styles.div}>
            <label style={styles.label}>login</label>
            <input style={styles.input} type="text" />
        </div>
        <div style={styles.div}>
            <label style={styles.label}>password</label>
            <input style={styles.input} type="password" />
        </div>
        <div style={styles.div}>
            <button style={styles.button}>Submit</button>
        </div>
    </form>
}
export default FormBlock