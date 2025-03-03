import {StyleSheet} from 'react-native';
import {theme} from './theme';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'stretch', // Centrado de contenido en la pantalla
  },
  text: {
    color: theme.colors.text,
    fontSize: theme.fontSize.medium,
    textAlign: 'left', // Aseguramos que los textos estén alineados a la izquierda
  },
  title: {
    color: theme.colors.text,
    fontSize: theme.fontSize.large,
    fontWeight: 'bold',
    marginBottom: theme.spacing.small,
    textAlign: 'left',
    marginLeft: theme.spacing.medium,
  },
  subtitle: {
    fontSize: theme.fontSize.medium,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.medium,
    textAlign: 'left',
    marginLeft: theme.spacing.medium,
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.medium,
    borderRadius: theme.borderRadius.medium,
    borderColor: theme.colors.text,
    borderWidth: 2,
    alignItems: 'center',
    width: '100%',
    marginTop: theme.spacing.medium,
    marginLeft: theme.spacing.medium,
  },
  buttonText: {
    color: theme.colors.surface,
    fontSize: theme.fontSize.medium,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: theme.spacing.small,
    borderWidth: 3,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.medium,
    backgroundColor: theme.colors.surface,
    marginBottom: 4,
    fontSize: theme.fontSize.medium,
    marginLeft: theme.spacing.medium,
  },

  label: {
    fontSize: theme.fontSize.medium,
    color: theme.colors.text,
    marginBottom: 2,
    textAlign: 'left',
    marginLeft: theme.spacing.medium,
  },
  registerText: {
    marginTop: theme.spacing.large,
    fontSize: theme.fontSize.medium,
    color: theme.colors.text,
    textAlign: 'center',
    marginBottom: theme.spacing.large,
    marginLeft: theme.spacing.medium,
  },
  loginText: {
    marginTop: 2,
    fontSize: theme.fontSize.medium,
    color: theme.colors.text,
    textAlign: 'center',
    marginBottom: 2,
    marginLeft: theme.spacing.medium,
  },
  bold: {
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  logo: {
    width: '100%',
    resizeMode: 'contain',
    marginTop: theme.spacing.large,
    alignContent: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  innerContainer: {
    width: '90%',
    alignItems: 'flex-start', // Alineamos los elementos a la izquierda
    marginTop: 2,
  },
});
