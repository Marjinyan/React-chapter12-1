import styles from './style.js'
const FormInline = () => {
    return <form style={styles.form}>
        <div style={styles.div}>
            <label>login</label>
            <input style={styles.input} type="text" />
        </div>
        <div style={styles.div}>
            <label>password</label>
            <input style={styles.input} type="password" />
        </div>
        <div style={styles.div}>
            <button style={styles.button}>Submit</button>
        </div>
    </form>
}
export default FormInline